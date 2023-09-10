import { style } from "@vanilla-extract/css";

export const textarea = style({
  width: "100vw",
  // NOTE(@정현수): header 크기(76px)를 뺌
  height: "calc(100vh - 76px)",
  padding: "10px",
  fontSize: "16px",

  border: "none",
  outline: "none",
  resize: "none",
});
