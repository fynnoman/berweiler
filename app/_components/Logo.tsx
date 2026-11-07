import Image from "next/image";

export function Logo({
  variant = "dark",
  className = "",
  height = 32,
}: {
  variant?: "dark" | "light";
  className?: string;
  height?: number;
}) {
  return (
    <Image
      src="/logo.jpeg"
      alt="Berweiler Metallkonzept GmbH"
      width={height * 2.5}
      height={height}
      priority
      className={`${variant === "light" ? "invert brightness-0" : ""} h-auto w-auto object-contain ${className}`}
      style={{ height }}
    />
  );
}
