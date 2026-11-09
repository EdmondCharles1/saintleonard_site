import Link from "next/link";
import { cn } from "@/lib/cn";

interface LienBoutonProps {
  href: string;
  children: React.ReactNode;
  variante?: "principal" | "secondaire" | "succes";
  /** Lien vers un autre site (WhatsApp, plateforme) : balise <a> simple. */
  externe?: boolean;
  className?: string;
}

const STYLES = {
  principal: "bg-primary text-primary-foreground hover:bg-primary-600",
  secondaire: "border border-primary-300 bg-background text-primary-700 hover:bg-primary-50",
  succes: "bg-success text-success-foreground hover:bg-success-ink",
} as const;

export function LienBouton({ href, children, variante = "principal", externe = false, className }: LienBoutonProps) {
  const classes = cn(
    "label-ui inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5",
    STYLES[variante],
    className,
  );
  if (externe) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
