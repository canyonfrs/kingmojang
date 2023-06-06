import { style } from "@vanilla-extract/css";

import { COLOR } from "../../styles/theme.css";

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

export const background = style({
  position: "absolute",
  left: "78.49%",
  right: "-34.53%",
  top: "-63.06%",
  bottom: "66.94%",
  background: "linear-gradient(90deg, #9181E9 -0.02%, #6358EE 64.42%)",
  opacity: "0.15",
  filter: "blur(100px)",
});
export const background2 = style({
  position: "absolute",
  width: "1088px",
  height: "1088px",
  left: "-850px",
  bottom: "-800px",

  /* sub solor */

  background: `${COLOR.Sub}`,
  opacity: 0.2,
  filter: "blur(150px)",
});

export const contentWrapper = style({
  display: "flex",
  flexDirection: "column",
  // gap: "12px",
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
