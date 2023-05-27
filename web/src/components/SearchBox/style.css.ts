import { style } from "@vanilla-extract/css";

export const Container = style({
  borderRadius: "8px",
  border: "1px solid #6358EE",
  padding: "0 10px 0 18px",
  width: "440px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const InputStyle = style({
  border: "none",
  height: "100%",
  width: "100%",
  outline: "none",
});

export const ButtonStyle = style({
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",

  ":focus": {
    outline: "none",
  },
});
