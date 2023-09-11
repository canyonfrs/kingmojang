import { style } from "@vanilla-extract/css";
import { rem } from "polished";

import { Typography } from "../../../styles/typography";

export const container = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: rem(60),
  backgroundColor: "#eeeeee",
});

export const wrapper = style({
  width: rem(1200),
  paddingBottom: rem(60),
});

export const title = style({
  paddingBottom: rem(18),
  ...Typography({
    weight: "700",
    size: "20",
  }),

  fontSize: rem(20),
});
