import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rooki.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/como-funciona",
    "/casos-de-uso",
    "/insights",
    "/sobre",
    "/faq",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
    "/aviso-legal",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/como-funciona" ? 0.9 : 0.7,
  }));
}
