import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const container = style({
  backgroundColor: "#F9F9F9",
});

export const divider = style({
  border: "1px solid #CED4DA",
  display: "flex",
  justifyContent: "center",
  width: rem(1200),
});
