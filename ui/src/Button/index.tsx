import { mergeProps } from "@react-aria/utils";
import type { ButtonHTMLAttributes } from "react";

import { useTouchEffect } from "./hooks/useTouchEffect";
import { ButtonStyle } from "./style.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 터치 효과를 사용할지 여부를 결정합니다.
   */
  touchEffect?: boolean;
}

export function Button({ className, ...props }: Props) {
  const { touchEffect, ...restProps } = props;
  const { ref, touchEffectProps } = useTouchEffect();

  const buttonProps = touchEffect
    ? mergeProps(restProps, touchEffectProps)
    : mergeProps(restProps);

  return (
    <button
      ref={ref}
      className={`${ButtonStyle} ${className}`}
      {...buttonProps}
    />
  );
}
