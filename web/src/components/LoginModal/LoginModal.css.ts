import { style } from "@vanilla-extract/css";

export const modal = style({
  display: "flex",
  padding: "26px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F5F4FF",
  width: "312px",
  height: "440px",
  borderRadius: "10px",
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "26px",
  gap: "8px",
});

export const input = style({
  border: "1px solid #CED4DA",
  width: "260px",
  height: "42px",
  borderRadius: "5px",
  padding: "11px 14px",
});
export const loginBtn = style({
  backgroundColor: "#6358EE",
  marginTop: "36px",
  width: "260px",
  height: "42px",
  border: "none",
  borderRadius: "5px",
  color: "white",
  fontFamily: "Noto Sans CJK KR",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "19px",
  textAlign: "center",
  cursor: "pointer",
});

export const p = style({
  color: "#666666",
  fontFamily: "Noto Sans CJK KR",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "19px",
  letterSpacing: "0px",
  textAlign: "left",
});

export const info = style({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  margin: "8px 0",
  marginBottom: "40px",
});

export const socialLogin = style({
  marginTop: "8px",
  display: "flex",
  gap: "18px",
  justifyContent: "space-between",
  margin: "8px 0",
});
