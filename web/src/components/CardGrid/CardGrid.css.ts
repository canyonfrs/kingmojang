import { style } from "@vanilla-extract/css";

export const Wrapper = style({
  // display: "flex",
  // flexWrap: "wrap",
  gap: "13px",
  // justifyContent: "center",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",

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
