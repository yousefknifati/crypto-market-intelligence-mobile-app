import { getAndroidAssetLinks } from "@/lib/pwa/getAndroidAssetLinks";

export function GET() {
  return Response.json(getAndroidAssetLinks(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
