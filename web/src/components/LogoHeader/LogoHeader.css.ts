import { style } from "@vanilla-extract/css";

export const title = style({
  fontFamily: "Noto Sans CJK KR",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "30px",
  letterSpacing: 0,
  textAlign: "center",
  marginTop: "12px",
  marginBottom: "30px",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
