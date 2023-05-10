import { style } from "@vanilla-extract/css";

export const modal_wrapper = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(128, 128, 128, 0.8)",
});
