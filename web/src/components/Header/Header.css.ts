import { style } from "@vanilla-extract/css";

export const HeaderStyle = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px",
  height: "56px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
});

export const LogoStyle = style({});

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
