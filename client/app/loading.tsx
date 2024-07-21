import LottiePlayer from "@/components/lottie-player";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <LottiePlayer status="loading" size="full-screen" />
    </div>
  );
};

export default Loading;
