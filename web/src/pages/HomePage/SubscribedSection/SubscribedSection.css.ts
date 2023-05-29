import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const container = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: rem(60),

  backgroundColor: "#eeeeee",
});

export const wrapper = style({
  width: rem(1200),
  paddingBottom: rem(70),
});

export const title = style({
  paddingBottom: rem(18),

  fontSize: rem(20),
});
