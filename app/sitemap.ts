import type { MetadataRoute } from "next";
import { registry } from "@/data/registry";
import { industries } from "@/data/content";

export const dynamic = "force-static";

const base = "https://codetrustassurance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/what-is-ctaf",
    "/framework",
    "/assessment",
    "/certification",
    "/registry",
    "/verify",
    "/report-access",
    "/industries",
    "/resources",
    "/training",
    "/partners",
    "/about",
    "/contact",
    "/portal",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const registryRoutes = registry.map((r) => ({
    url: `${base}/registry/${r.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...registryRoutes, ...industryRoutes];
}
