import type { MetadataRoute } from "next";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const SITE = "https://www.simpleworks.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const reader = createReader(process.cwd(), keystaticConfig);
  const posts = await reader.collections.posts.all();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/services/msme-consulting`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${SITE}/services/small-business-consulting`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/services/family-business-consulting`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${SITE}/services/okr-consulting`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/services/gtm-consulting`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${SITE}/services/execution-consulting`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${SITE}/programmes`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/sample-diagnostic-report`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/resources`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/contact`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${SITE}/startup-mentor-bengaluru`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/msme-business-coach`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/tamil-nadu-msme-consultant`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${SITE}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/terms-of-use`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/refund-and-cancellation-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/shipping-and-delivery-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.entry.date ? new Date(p.entry.date) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
