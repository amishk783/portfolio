import { Footer } from "@/components/UI/Footer";
import { Header } from "@/components/UI/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PostHogProvider client={posthog}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PostHogProvider>
    </>
  );
}
