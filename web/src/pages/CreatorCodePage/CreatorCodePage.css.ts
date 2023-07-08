import { style } from "@vanilla-extract/css";
import { rem } from "polished";

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

export const wrapper = style({
  width: "478px",
  height: "316px",
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  alignItems: "center",
  border: `1px solid ${COLOR.Gray_4}`,
  borderRadius: "12px",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.05)",
});

export const input = style({
  width: rem(360),
  height: rem(50),
  borderRadius: "5px",
  backgroundColor: "#F7F7F9",
  padding: "15px 14px",
  border: "none",
});

export const title = style({
  fontFamily: "Noto Sans CJK KR",
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "30px",
});

export const info = style({
  fontFamily: "Noto Sans CJK KR",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "19px",
  marginBottom: "20px",
});

export const finishButton = style({
  width: "360px",
  height: "50px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#6358EE4D",
  color: "white",
  fontSize: "16px",
  fontWeight: 700,
  ":hover": {
    backgroundColor: `${COLOR.Primary}`,
  },
  ":focus": {
    backgroundColor: `${COLOR.Primary}`,
  },
});

export const number = style({
  width: "40px",
  height: "50px",
  backgroundColor: "#e9e9e9",
  border: "none",
  borderRadius: "5px",
  color: `${COLOR.Primary}`,
  textAlign: "center",
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "19.14px",
});

export const h1 = style({
  fontSize: "20px",
  fontWeight: 700,
});
