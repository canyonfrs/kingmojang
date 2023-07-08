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

export const form = style({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",
});

export const textfield = style({
  width: "100%",
  height: "32px",

  marginTop: "8px",
  padding: "6px",

  borderRadius: "6px",
  border: "none",
});

export const loginButton = style({
  width: "100%",
  height: "40px",

  marginTop: "10px",

  backgroundColor: "#6358EE",
  color: "#FFFFFF",
  borderRadius: "6px",
  border: "none",
});

export const findIdLink = style({
  fontSize: "12px",

  textDecoration: "underline",

  marginTop: "12px",
  color: "#666666",

  ":hover": {
    cursor: "pointer",
    color: "#000000",
  },
});

export const socialLoginSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  marginTop: "40px",
});

export const socialLoginButtonContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",

  marginTop: "12px",
  columnGap: "12px",
});

export const socialLoginButton = style({
  width: "40px",

  ":hover": {
    cursor: "pointer",
  },
});
