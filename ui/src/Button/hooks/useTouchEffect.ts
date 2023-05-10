import { usePress } from "@react-aria/interactions";
import { useRef } from "react";

export function useTouchEffect() {
  const targetRef = useRef<HTMLButtonElement | null>(null);

  const { pressProps } = usePress({
    onPressStart: () => {
      if (targetRef.current) {
        targetRef.current.style.transform = "scale(0.94)";
        targetRef.current.style.opacity = "0.8";
      }
    },
    onPressEnd: () => {
      if (targetRef.current) {
        targetRef.current.style.transform = "scale(1)";
        targetRef.current.style.opacity = "1";
      }
    },
  });

  return { ref: targetRef, touchEffectProps: pressProps };
}
