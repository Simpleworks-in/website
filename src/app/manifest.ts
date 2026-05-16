import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Simpleworks Consulting",
    short_name: "Simpleworks",
    description:
      "Independent management consulting in Bengaluru — strategy, growth and execution for Indian MSMEs.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FFFFFF",
    theme_color: "#ED1C24",
    lang: "en-IN",
    categories: ["business", "education", "productivity"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Read the blog",
        short_name: "Blog",
        url: "/blog",
        description: "Practical perspectives on strategy, growth, and execution.",
      },
      {
        name: "Get in touch",
        short_name: "Contact",
        url: "/contact",
        description: "Send a message, book a call, or message on WhatsApp.",
      },
    ],
  };
}
