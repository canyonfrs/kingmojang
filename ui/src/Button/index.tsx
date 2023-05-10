import { mergeProps } from "@react-aria/utils";
import type { HTMLAttributes } from "react";

import { useTouchEffect } from "./hooks/useTouchEffect";
import { ButtonStyle } from "./style.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: Props) {
  const { ref, touchEffectProps } = useTouchEffect();

  return (
    <button
      ref={ref}
      className={`${ButtonStyle} ${className}`}
      {...mergeProps(props, touchEffectProps)}
    />
  );
}
