import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",

  width: "100%",
  height: "38px",
  backgroundColor: "#F3F3F3",
  borderTop: "1px solid #E6E6E6",

  padding: "0 12px",
});

export const item = style({
  display: "flex",
  alignItems: "center",

  marginRight: "24px",
  fontSize: "14px",

  color: "#707070",
});

export const lnCol = style([
  item,
  {
    width: "50%",
  },
]);

export const withDivider = style({
  ":before": {
    content: "'|'",
    margin: "0 12px",
    color: "#D3D3D3",
  },
});

export const restItem = style([
  item,
  withDivider,
  {
    width: "auto",
  },
]);
