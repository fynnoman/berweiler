# Jarvis – GitHub / Claude Code / Vercel Standard

## Auslöser
Wenn Fynn („Sir“) in ChatGPT „Jarvis, starte/benutze/stoße den Workflow an“ oder eine Änderung an einer Website verlangt, bedeutet dies:
1. Betroffenes Repository bei `fynnoman` bestimmen.
2. Tatsächliche GitHub-Konfiguration unter `.github/workflows/` prüfen.
3. Konkreten Auftrag als Issue mit `@claude` erstellen (oder vorhandenes Issue entsprechend kommentieren), sofern die Claude Action dafür eingerichtet ist.
4. Workflow-Run und Claude-Ergebnis kontrollieren; ein Issue allein ist **kein** Ausführungsnachweis.
5. Änderungen testen und auf `main` übernehmen, soweit Berechtigungen, Checks und Branch-Schutz das zulassen. Keine unkontrollierten Force-Pushes.
6. Vercel-Produktionsdeployment prüfen und Live-Seite verifizieren, falls das Repository eine Website enthält und Vercel verbunden ist.
7. Abschluss mit tatsächlichen Links zu Issue, Run, Commit/PR und Deployment melden. Blocker offen benennen.

## GitHub Actions
Referenz: `.github/workflows/jarvis-claude.yml` in diesem Repository.
- Trigger: von `fynnoman` eröffnetes Issue oder Kommentar mit `@claude`.
- Erforderliches Secret: `CLAUDE_CODE_OAUTH_TOKEN` (Repository- oder zugängliches Organisation-Secret).
- Erforderliche Rechte: GitHub Actions darf schreiben; `contents`, `issues`, `pull-requests` und `id-token` laut YAML.
- Automatischer Merge ist ein **Versuch**, keine Erfolgsgarantie. Prüfe Branch-Protection, CI, Action-Ausgaben und tatsächlichen Push nach `main`.

## Neue Repositories
GitHub kopiert Actions-Workflows **nicht automatisch** in jedes neue Repository. Ein GitHub-Template-Repository (in den GitHub-Einstellungen als Template markiert) kann die Datei bei Erstellung über „Use this template“ übernehmen. Alternativ muss eine separate, extern autorisierte Repository-Creation-Automation eingerichtet werden.
- Workflow-Datei in neues Repository kopieren oder Repository aus Template erzeugen.
- OAuth-Secret und GitHub-Actions-Berechtigungen prüfen.
- Vercel-Projekt und Produktionsbranch `main` verbinden.
- Mit einem ungefährlichen Test-Issue inklusive `@claude` prüfen.
- Erst nach erfolgreichem Test als betriebsbereit melden.

## ChatGPT-Erinnerung
Diese Datei ist eine **technische Referenz** und keine automatische ChatGPT-Memory-Synchronisierung. In neuen Chats: „Jarvis, verwende den Workflow aus `fynnoman/berweiler`, `.github/JARVIS_WORKFLOW.md`.“ Die Erinnerung in ChatGPT ist separat zu pflegen.
