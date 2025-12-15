// app/manifest.ts
import { headers } from "next/headers";
import type { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // ✅ Await headers() as it returns a Promise in Next.js 15+
  const headersList = await headers();
  const domain = headersList.get("host") || "";

  // In real SaaS: fetch tenant by domain here
  // const tenant = await getTenantByDomain(domain);

  return {
    name: "tenantName",
    short_name: "tenantShortName",
    description: "tenantDescription",
    theme_color: "themeColor",
    background_color: "backgroundColor",  
    display: "standalone",
    orientation: "portrait",
    scope: ".",
    start_url: "/",
    icons: [
      { src: "img/pwa-icons/36x36.png", sizes: "36x36", type: "image/png" },
      { src: "img/pwa-icons/48x48.png", sizes: "48x48", type: "image/png" },
      { src: "img/pwa-icons/72x72.png", sizes: "72x72", type: "image/png" },
      { src: "img/pwa-icons/96x96.png", sizes: "96x96", type: "image/png" },
      { src: "img/pwa-icons/128x128.png", sizes: "128x128", type: "image/png" },
      { src: "img/pwa-icons/144x144.png", sizes: "144x144", type: "image/png" },
      { src: "img/pwa-icons/152x152.png", sizes: "152x152", type: "image/png" },
      { src: "img/pwa-icons/192x192.png", sizes: "192x192", type: "image/png" },
      { src: "img/pwa-icons/384x384.png", sizes: "384x384", type: "image/png" },
      { src: "img/pwa-icons/512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}