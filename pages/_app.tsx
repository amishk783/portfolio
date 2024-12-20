import { Footer } from "@/components/UI/Footer";
import { Header } from "@/components/UI/Header";
import { ThemeProvider, useTheme } from "@/components/Provider/ThemeProvider";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
// import { Inter } from "next/font/google";

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

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PostHogProvider client={posthog}>
        <ThemeProvider>
          <BackgroundVideo />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </PostHogProvider>
    </>
  );
}
function BackgroundVideo() {
  const { backgroundLink } = useTheme(); // Safely access useTheme here
  return (
    <div className="fixed top-0 left-0 opacity-30 h-screen w-full z-0">
      <video
        loop
        muted
        autoPlay
        preload="auto"
        className={` w-full h-full block object-cover rounded-xl object-center`}
        src={backgroundLink || ""}
      ></video>
    </div>
  );
}
