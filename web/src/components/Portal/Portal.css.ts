import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: "hidden",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 100,
});

export const background = styleVariants({
  hasDimmer: [base, { backgroundColor: "rgba(128, 128, 128, 0.8)" }],
  noDimmer: [base],
});
