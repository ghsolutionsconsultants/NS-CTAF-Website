import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "icon";
  className?: string;
}) {
  if (variant === "icon") {
    return (
      <Image
        src="/brand/ns-icon.png"
        alt="Nucleus Systems"
        width={40}
        height={44}
        className={className}
        priority
      />
    );
  }
  return (
    <Image
      src="/brand/ns-logo.png"
      alt="Nucleus Systems"
      width={936}
      height={356}
      className={className}
      priority
    />
  );
}

export function BrandLockup({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex shrink-0 items-center" aria-label="Nucleus Systems — NS-CTAF home">
      <Logo variant="full" className="h-7 w-auto md:h-8" />
    </Link>
  );
}
