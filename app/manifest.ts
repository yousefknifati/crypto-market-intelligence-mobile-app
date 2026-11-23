import type { MetadataRoute } from "next";
import { APP_THEME_COLOR } from "@/lib/pwa/appThemeColor";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Crypto Market Intelligence",
    short_name: "Crypto Intel",
    description:
      "Track cryptocurrency prices, market rankings, historical trends, live updates, and personal watchlists.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f8fafc",
    theme_color: APP_THEME_COLOR,
    categories: ["finance", "business"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Market overview",
        short_name: "Market",
        url: "/",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Watchlist",
        short_name: "Watchlist",
        url: "/watchlist",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
