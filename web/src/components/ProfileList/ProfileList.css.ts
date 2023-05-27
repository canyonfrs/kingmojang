import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const wrapper = style({
  paddingLeft: rem(10),
  display: "flex",
  gap: rem(16),
  margin: 0,
  height: rem(60),
  zIndex: 10,
  position: "relative",
});

export const item = style({});

export const more = style({
  width: rem(60),
  height: rem(60),
  borderRadius: rem(30),
  backgroundColor: "#bfbfbf",
  gap: rem(8),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const moreDot = style({
  width: rem(6),
  height: rem(6),
  borderRadius: rem(3),
  backgroundColor: "#ffffff",
});
