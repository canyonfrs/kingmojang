import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100vw",
  height: "calc(100vh - 56px - 60px)",

  backgroundColor: "white",
  position: "relative",
  overflowX: "hidden",
  overflowY: "hidden",
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
});

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

export const form = style({
  width: "478px",
  // height:"70px"
});
