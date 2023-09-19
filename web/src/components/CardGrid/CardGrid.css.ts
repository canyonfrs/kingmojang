import { style } from "@vanilla-extract/css";

export const Wrapper = style({
  display: "grid",
  gridTemplateRows: "auto",
  placeItems: "baseline",
  rowGap: "30px",
  "@media": {
    "screen and (min-width: 1200px)": {
      gridTemplateColumns: "repeat(3,1fr)",
    },
    "screen and (min-width: 768px) and (max-width: 1200px)": {
      gridTemplateColumns: "repeat(2,1fr)",
    },
    " screen and (min-width: 480px) and (max-width: 767px)": {
      gridTemplateColumns: "repeat(1,1fr)",
    },
    "(prefers-reduced-motion)": {
      transitionProperty: "color",
    },
  },
});
