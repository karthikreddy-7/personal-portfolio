import type { MetadataRoute } from "next"
import { PROJECT_DETAIL_SLUGS } from "./projects/projects-data"

const BASE = "https://basupallykarthikreddy.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    ...PROJECT_DETAIL_SLUGS.map((slug) => ({
      url: `${BASE}/projects/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
