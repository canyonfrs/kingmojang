import { style } from "@vanilla-extract/css";

import { Typography } from "../../styles/typography";

export const HeaderStyle = style({
  ...Typography({
    font: "Pretendard",
    weight: "400",
  }),
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px",
  height: "56px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
});

export const SearchBoxWraper = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const ButtonWrapper = style({
  display: "flex",
  gap: "12px",
});

export const SigninButtonStyle = style({
  color: "#000",
  fontWeight: 700,
  backgroundColor: "#F5F5F5",
});

export const SignupButtonStyle = style({
  color: "#fff",
  fontWeight: 700,
  backgroundColor: "#6358EE",
});

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

export const logoutButton = style({
  width: "100%",
  height: "40px",

  marginTop: "10px",

  backgroundColor: "#6358EE",
  color: "#FFFFFF",
  borderRadius: "6px",
  border: "none",
});
