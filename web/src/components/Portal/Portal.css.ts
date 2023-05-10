import { style } from "@vanilla-extract/css";

export const modal_wrapper = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const modal = style({
  // width: 380,
  // padding: 20,
  // backgroundColor: "#fff",
  // margin: "80px auto",
});
