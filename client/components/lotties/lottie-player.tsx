"use client";

import { cn } from "@/lib/utils";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import React, { useMemo, useRef } from "react";
export type StatusType = "loading";
export interface StatusImgProps {
  status: StatusType;
  size?: "xs" | "sm" | "md" | "lg" | "xxs" | "xl" | "xxl" | "full-screen";
  className?: string;
}

const StatusImg: React.FC<StatusImgProps> = ({
  status,
  size = "lg",
  className,
}) => {
  const loadingRef = useRef<HTMLDivElement>(null);

  const lottieFile = useMemo(() => {
    switch (status) {
      case "loading":
        return "/assets/lotties/loading.lottie";
      default: {
        return "/assets/lotties/loading.lottie";
      }
    }
  }, [status]);

  const sizeRender = React.useMemo(() => {
    switch (size) {
      case "xxs":
        return 20;
      case "xs":
        return 60;
      case "sm":
        return 70;
      case "md":
        return 80;
      case "lg":
        return 120;
      case "xl":
        return 200;
      case "xxl":
        return 300;
      case "full-screen":
        return 360;
      default:
        return 120;
    }
  }, [size]);

  // useEffect(() => {
  //   const instance = Lottie.loadAnimation({
  //     container: loadingRef.current as HTMLElement, // Required
  //     animationData: RenderStatus?.json,
  //     renderer: "svg", // Required
  //     loop: status === "loading" ? true : false, // Optional
  //     autoplay: true, // Optional
  //     name: status, // Name for future reference. Optional.
  //   });

  //   return () => {
  //     instance.destroy();
  //   };
  // }, [status, RenderStatus]);

  return (
    <div
      className={cn(`flex items-center justify-center`, className)}
      style={{
        height: sizeRender,
      }}
    >
      <DotLottiePlayer src={lottieFile} autoplay loop />
      {/* <div
        ref={loadingRef}
        style={{ width: "100%", height: "100%" }}
        key={status}
      /> */}
    </div>
  );
};

export default React.memo(StatusImg);
