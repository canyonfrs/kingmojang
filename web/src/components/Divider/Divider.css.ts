import { style } from "@vanilla-extract/css";

export const divideWrap = style({
  width: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

export const divideLine = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: 0,
  width: "100%",
  mixBlendMode: "normal",
  boxSizing: "border-box",
  border: "0.5px solid #CED4DA",
});
