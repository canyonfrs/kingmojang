import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const container = style({
  backgroundColor: "#F9F9F9",
  minWidth: rem(1280),
  display: "flex",
  width: "100vw",
  flexDirection: "column",
});
