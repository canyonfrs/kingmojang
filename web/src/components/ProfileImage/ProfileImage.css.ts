import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { rem } from "polished";

export const wrapper = recipe({
  base: {
    width: rem(60),
    height: rem(60),
    borderRadius: rem(30),
    overflow: "hidden",
    cursor: "pointer",
  },
  variants: {
    selected: {
      true: {
        width: rem(90),
        height: rem(90),
        borderRadius: rem(45),
        border: "3px solid #6358EE",
      },
    },
  },
});

export const image = style({
  width: "100%",
});
