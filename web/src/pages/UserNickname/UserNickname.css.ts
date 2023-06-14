import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100vw",
  height: "calc(100vh - 56px - 60px)",

  backgroundColor: "white",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
});
