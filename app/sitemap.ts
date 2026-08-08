import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/research",
    "/cv",
    "/biochemical-society",
    "/opportunities",
    "/resources",
    "/resources/o-level",
    "/resources/a-level",
    "/resources/student-projects",
    "/resources/biochemical-society",
    "/student-guide",
    "/credits",
  ];

  return paths.map((path) => ({
    url: `https://alulerobert.me${path}`,
    lastModified: new Date("2026-08-08"),
    changeFrequency: path === "/opportunities" ? "weekly" : path.startsWith("/resources") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/opportunities" || path === "/resources" ? 0.8 : 0.6,
  }));
}
