import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",

  width: "100%",
  position: "relative",
});

export const input = style({
  display: "flex",
  flexDirection: "column",

  border: "1px solid #ccc",

  padding: "6px",

  // reset input styles
  outline: "none",
  background: "none",
  margin: 0,
  fontSize: "inherit",
  fontFamily: "inherit",
  fontWeight: "inherit",
  color: "inherit",
});

export const label = style({
  fontSize: "14px",
  fontWeight: 700,

  marginRight: "8px",

  width: "100%",
});
