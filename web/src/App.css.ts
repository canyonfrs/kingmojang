import { style } from "@vanilla-extract/css";

export const wrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100vw",
  height: "100vh",

  fontSize: "20px",
  fontWeight: "bold",
});
