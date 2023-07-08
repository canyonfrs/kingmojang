import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const Container = style({
  position: "relative",
  width: "100%",
  height: rem(375),
});

export const Banner = style({});

export const CameraButton = style({
  position: "absolute",
  width: rem(52),
  height: rem(52),
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  bottom: rem(17),
  right: rem(17),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
