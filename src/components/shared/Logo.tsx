import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  linkToHome?: boolean;
}

export function Logo({
  className,
  width = 120,
  height = 48,
  linkToHome = true,
}: LogoProps) {
  const img = (
    <Image
      src="/LOGO.PNG"
      alt="Rooki — Você suspeita, a gente detecta"
      width={width}
      height={height}
      className={cn("h-auto w-auto", className)}
      priority
    />
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-block">
        {img}
      </Link>
    );
  }

  return img;
}
