import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { rem } from "polished";

export const List = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  gap: rem(12),
});

export const Item = recipe({
  base: {
    fontWeight: "bold",
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: rem(100),
  },
  variants: {
    selected: {
      true: {
        color: "#6358EE",
        backgroundColor: "#EFF1FE",
        border: "2px solid #EFF1FE",
      },
      false: {
        color: "#495057",
        border: "2px solid #F4F4F4",
      },
    },
  },
});
