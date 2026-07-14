import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — outputs a fully static site to `out/` that any web
  // server (e.g. Hostinger shared hosting) can serve. No Node server needed.
  output: "export",

  // Apache/shared hosting serves folder/index.html cleanly at /path/.
  trailingSlash: true,

  // The default next/image optimizer needs a server; disable it for export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
