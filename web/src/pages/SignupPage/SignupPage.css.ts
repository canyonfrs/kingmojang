import { style, styleVariants } from "@vanilla-extract/css";

import { COLOR } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 56px - 60px)",
  width: "100vw",

  backgroundColor: "white",
});

export const buttonWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "450px",
  height: "260px",
  gap: "20px",
});

const base = style({
  display: "flex",
  fontFamily: "Noto Sans CJK KR",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "41px",
  height: "120px",
  backgroundColor: "white",
  justifyContent: "space-around",
  alignItems: "center",
  borderRadius: "8px",
});

export const SignupButton = styleVariants({
  user: [
    base,
    {
      border: `2px solid ${COLOR.Sub}`,
      color: `${COLOR.Sub}`,
      ":hover": {
        backgroundColor: `${COLOR.Sub}`,
        color: "white",
      },
    },
  ],
  creator: [
    base,
    {
      border: `2px solid ${COLOR.Primary}`,
      color: `${COLOR.Primary}`,
      ":hover": {
        backgroundColor: `${COLOR.Primary}`,
        color: "white",
      },
    },
  ],
});

export const creatorButtonImage = style({
  ":hover": {
    color: "white",
  },
});
