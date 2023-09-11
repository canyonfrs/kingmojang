import { style } from "@vanilla-extract/css";

export const Wrapper = style({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridTemplateRows: "auto",
  placeItems: "baseline",
  rowGap: "30px",
});
