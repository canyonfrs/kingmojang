import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

import SuccessAnimation from "./Success.json";

export default function Success() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      Lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: SuccessAnimation,
      });
    }
  }, []);
  return (
    <div
      ref={containerRef}
      style={{ width: "950px", position: "fixed", bottom: 0 }}
    />
  );
}
