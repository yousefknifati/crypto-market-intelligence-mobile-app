export type AndroidAssetLink = {
  relation: string[];
  target: {
    namespace: "android_app";
    package_name: string;
    sha256_cert_fingerprints: string[];
  };
};

const SHA256_FINGERPRINT_PATTERN = /^([0-9A-F]{2}:){31}[0-9A-F]{2}$/;

/**
 * Builds the Digital Asset Links statement that lets the Play Store TWA open
 * this origin full-screen. Returns an empty list until both env vars are set,
 * so a missing configuration never publishes a malformed statement.
 */
export function getAndroidAssetLinks(): AndroidAssetLink[] {
  const packageName = process.env.ANDROID_PACKAGE_NAME?.trim();
  const fingerprints = (process.env.ANDROID_SHA256_CERT_FINGERPRINTS ?? "")
    .split(",")
    .map((value) => value.trim().toUpperCase())
    .filter((value) => SHA256_FINGERPRINT_PATTERN.test(value));

  if (!packageName || fingerprints.length === 0) return [];

  return [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: packageName,
        sha256_cert_fingerprints: fingerprints,
      },
    },
  ];
}
