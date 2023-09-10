import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  height: "38px",

  padding: "0 12px",

  borderBottom: "2px solid #00000019",
});

export const left = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const right = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "14px",

  marginRight: "24px",

  color: "#696969",
});

export const trigger = style([
  item,
  {
    // remove button style
    border: "none",
    outline: "none",
    background: "none",
    cursor: "pointer",
  },
]);
