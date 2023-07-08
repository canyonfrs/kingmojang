import { rem } from "polished";
import type { CSSProperties } from "react";

interface SpacingProps {
  size: number;
  style?: CSSProperties;
}

export function Spacing({ size, style }: SpacingProps) {
  return <div style={{ height: rem(size), width: rem(size), ...style }} />;
}
