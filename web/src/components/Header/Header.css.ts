import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
  height: "80px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
});
