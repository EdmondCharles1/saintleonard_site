import type { ImageLocale as Img } from "@/content/types";
import { cn } from "@/lib/cn";

/** Image déjà optimisée avant le build (D-07) : <img> natif, dimensions explicites. */
export function ImageLocale({ image, className, prioritaire = false }: { image: Img; className?: string; prioritaire?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      alt={image.alt}
      width={image.largeur}
      height={image.hauteur}
      loading={prioritaire ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
