import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Offline",
  description: "You are offline. Reconnect to load live crypto market data.",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-16 text-center">
      <Heading level={1} size="lg">
        You&apos;re offline
      </Heading>
      <p className="text-sm text-sidebar-muted">
        Market prices need a network connection. Check your connection and try
        again.
      </p>
      {/* A full document navigation retries the network; a client-side Link
          would issue an RSC fetch that fails again while offline. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-3.5 text-[13px] font-semibold text-white outline-none hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
      >
        Try again
      </a>
    </section>
  );
}
