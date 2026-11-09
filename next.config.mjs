/**
 * Site public CPMSL : export statique (D-01).
 * Les en-têtes HTTP ne sont PAS définis ici : headers() est ignoré en export
 * statique. Ils sont dans vercel.json ; la CSP des scripts est injectée dans
 * chaque page par scripts/csp-meta.mjs (D-06).
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // Pas d'optimisation à l'exécution en export statique : les images sont
    // optimisées avant le build (D-07).
    unoptimized: true,
  },
};

export default nextConfig;
