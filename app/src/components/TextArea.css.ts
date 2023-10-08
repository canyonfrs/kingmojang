import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",

  width: "100vw",
  // NOTE: header 크기(76px)를 뺌
  height: "calc(100vh - 76px)",
});

export const textarea = style({
  width: "100%",
  height: "calc(100vh - 76px)",

  padding: "10px",
  fontSize: "16px",

  border: "none",
  outline: "none",
  resize: "none",
});

export const saving = style({
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "12px",
  color: "#999",
});
