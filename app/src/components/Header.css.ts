import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",

  width: "100%",
  height: "38px",

  padding: "0 12px",

  borderBottom: "2px solid #00000019",
});

export const item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "14px",

  marginRight: "24px",

  color: "#696969",
});
