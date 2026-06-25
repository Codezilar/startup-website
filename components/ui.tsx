import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function Button({ children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <a className={`btn btn-${variant} ${className}`} href="#pricing">
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={14} />
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  side
}: {
  eyebrow: string;
  title: string;
  side?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {side ? <p>{side}</p> : null}
    </div>
  );
}
