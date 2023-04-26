import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100vw",
  height: "calc(100vh - 80px - 100px)",

  backgroundColor: "#F1F1F1",
});
