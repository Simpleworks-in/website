import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/keystatic", "/api/", "/startup-mentor-bengaluru"],
      },
    ],
    sitemap: "https://simpleworks.in/sitemap.xml",
    host: "https://simpleworks.in",
  };
}
