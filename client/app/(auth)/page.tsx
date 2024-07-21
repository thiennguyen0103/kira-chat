"use client";

import LottiePlayer from "@/components/lottie-player";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <LottiePlayer status="conversation" size="full-screen" />
    </div>
  );
}
