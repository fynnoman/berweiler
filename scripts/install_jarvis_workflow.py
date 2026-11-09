"""Install the Jarvis workflow in repositories owned by OWNER.

Requires JARVIS_REPO_SYNC_TOKEN with repository Contents read/write permissions.
Updates the managed Jarvis workflow only when content differs. Logs failures without exposing credentials.
"""
import base64
import json
import os
import sys
import time
import random
import urllib.error
import urllib.request

TOKEN = os.environ.get("GH_SYNC_TOKEN", "")
OWNER = os.environ.get("OWNER", "fynnoman")
SOURCE = os.environ.get("TEMPLATE_REPO", "berweiler")
PATH = ".github/workflows/jarvis-claude.yml"
API = "https://api.github.com"

def api(method, path, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(API + path, data=data, method=method, headers={
        "Authorization": "Bearer " + TOKEN,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "jarvis-repo-sync",
    })
    try:
        with urllib.request.urlopen(req, timeout=25) as response:
            return response.status, json.load(response)
    except urllib.error.HTTPError as error:
        return error.code, error.read().decode()[:500]

def decode_content(item):
    return base64.b64decode(item["content"]).decode("utf-8")

def main():
    if not TOKEN:
        sys.exit("Missing secret JARVIS_REPO_SYNC_TOKEN")
    code, source = api("GET", f"/repos/{OWNER}/{SOURCE}/contents/{PATH}")
    if code != 200:
        sys.exit(f"Cannot read template workflow: HTTP {code}")
    template_text = decode_content(source)
    template = base64.b64encode(template_text.encode("utf-8")).decode("ascii")
    errors = []
    page = 1
    count = 0
    while True:
        code, repos = api("GET", f"/user/repos?affiliation=owner&per_page=100&page={page}")
        if code != 200:
            sys.exit(f"Cannot list repositories: HTTP {code}")
        if not repos:
            break
        for repo in repos:
            if repo["owner"]["login"].lower() != OWNER.lower() or repo.get("archived") or repo.get("fork"):
                continue
            name = repo["name"]
            if name == SOURCE:
                continue
            code, existing = api("GET", f"/repos/{OWNER}/{name}/contents/{PATH}")
            if code == 200:
                # Update only the exact Jarvis-managed workflow when it differs.
                current_content = decode_content(existing)
                if current_content == template_text:
                    continue
                code, _ = api("PUT", f"/repos/{OWNER}/{name}/contents/{PATH}", {
                    "message": "Synchronize Jarvis Claude workflow with central template",
                    "content": template,
                    "sha": existing["sha"],
                    "branch": repo.get("default_branch") or "main",
                })
                if code == 409:
                    # Retry transient Git ref conflicts with a fresh blob SHA.
                    for attempt in range(4):
                        time.sleep(2 ** attempt + random.random())
                        read_code, latest = api("GET", f"/repos/{OWNER}/{name}/contents/{PATH}")
                        if read_code != 200:
                            break
                        if decode_content(latest) == template_text:
                            code = 200
                            break
                        code, _ = api("PUT", f"/repos/{OWNER}/{name}/contents/{PATH}", {
                            "message": "Synchronize Jarvis Claude workflow with central template",
                            "content": template,
                            "sha": latest["sha"],
                            "branch": repo.get("default_branch") or "main",
                        })
                        if code in (200, 201):
                            break
                if code in (200, 201):
                    print(f"Updated workflow in {OWNER}/{name}")
                    count += 1
                else:
                    errors.append(f"{name}: update HTTP {code}")
                continue
            if code != 404:
                errors.append(f"{name}: lookup HTTP {code}")
                continue
            code, _ = api("PUT", f"/repos/{OWNER}/{name}/contents/{PATH}", {
                "message": "Install Jarvis Claude workflow",
                "content": template,
                "branch": repo.get("default_branch") or "main",
            })
            if code in (200, 201):
                print(f"Installed workflow in {OWNER}/{name}")
                count += 1
            else:
                errors.append(f"{name}: install HTTP {code}")
        page += 1
    print(f"Installed in {count} repositories")
    if errors:
        print("\n".join(errors))
        sys.exit(1)

if __name__ == "__main__":
    main()
