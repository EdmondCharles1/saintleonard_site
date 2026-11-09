import type { MetadataRoute } from "next";
import { navigation, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((lien) => ({
    url: new URL(lien.href, site.urlSite).toString(),
    changeFrequency: lien.href === "/actualites/" ? "weekly" : "monthly",
    priority: lien.href === "/" ? 1 : 0.7,
  }));
}
