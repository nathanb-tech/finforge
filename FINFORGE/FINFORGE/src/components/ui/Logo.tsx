import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fv-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.17 155)" />
          <stop offset="100%" stopColor="oklch(0.72 0.15 85)" />
        </linearGradient>
        <linearGradient id="fv-grad-2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.72 0.15 85)" />
          <stop offset="100%" stopColor="oklch(0.62 0.17 155)" />
        </linearGradient>
      </defs>
      {/* Rounded tile */}
      <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#fv-grad)" />
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="9.5"
        fill="none"
        stroke="white"
        strokeOpacity="0.25"
      />
      {/* Stylised F */}
      <path d="M12 10 H27 V14 H16 V19 H24 V23 H16 V30 H12 Z" fill="white" />
      {/* Scenario branch dots (Base / Stress / Crisis) */}
      <circle cx="30" cy="12" r="2" fill="url(#fv-grad-2)" stroke="white" strokeWidth="0.75" />
      <circle cx="30" cy="20" r="1.6" fill="white" opacity="0.9" />
      <circle cx="30" cy="27" r="1.2" fill="white" opacity="0.7" />
    </svg>
  );
}

export function LogoWordmark({
  className = "",
  size = "md",
  to = "/",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  to?: string;
}) {
  const dims = {
    sm: { mark: "w-7 h-7", text: "text-sm" },
    md: { mark: "w-9 h-9", text: "text-lg" },
    lg: { mark: "w-11 h-11", text: "text-xl" },
  }[size];

  return (
    <Link to={to} className={`flex items-center gap-2.5 group ${className}`}>
      <LogoMark className={`${dims.mark} drop-shadow-[0_6px_16px_oklch(0.62_0.17_155/0.35)]`} />
      <span className={`font-display font-bold ${dims.text} tracking-tight text-foreground`}>
        Finverse<span className="text-primary">.</span>
        <span className="gradient-text-gold">ai</span>
      </span>
    </Link>
  );
}
