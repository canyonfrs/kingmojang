import { style } from "@vanilla-extract/css";

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "312px",
  height: "100%",

  borderRadius: "8px",

  marginTop: "26px",
  marginRight: "10px",
  padding: "20px",

  backgroundColor: "#F5F4FF",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.10)",
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "14px",

  color: "#696969",
  border: "none",
  backgroundColor: "transparent",

  ":hover": {
    cursor: "pointer",
    color: "#000000",
  },
});
