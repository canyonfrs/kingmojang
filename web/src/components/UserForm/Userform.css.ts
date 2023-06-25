import { style, styleVariants } from "@vanilla-extract/css";
import { rem } from "polished";

import { COLOR } from "../../styles/theme.css";

export const tabMenu = style({
  height: "60px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "5px",
  borderBottom: `1px solid ${COLOR.Gray_4}`,
  color: "rgb(232, 234, 237)",
  fontWeight: "bold",
});

export const base = style({
  display: "flex",
  paddingBottom: rem(12),
  gap: rem(4),
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  width: rem(180),
  height: "calc( 100% + 2px )",
  fontFamily: "Noto Sans CJK KR",
  fontSize: rem(16),
  fontWeight: 700,
});

export const selectedUserTab = styleVariants({
  user: [
    base,
    {
      color: `${COLOR.Sub}`,
      borderBottom: `2px solid ${COLOR.Sub}`,
    },
  ],
  creator: [
    base,
    {
      color: `${COLOR.Primary}`,
      borderBottom: `2px solid ${COLOR.Primary}`,
    },
  ],
});

export const tabWrapper = style({
  border: `1px solid ${COLOR.Gray_4}`,
  borderRadius: rem(12),
  width: rem(478),
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

export const contentWrapper = style({
  height: rem(430),
});

export const form = style({
  marginTop: "40px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  alignItems: "center",
  gap: rem(12),
});

export const nextBtn = style({
  backgroundColor: `${COLOR.Primary}`,
  marginTop: rem(42),
  marginBottom: rem(52),
  width: rem(360),
  height: rem(50),
  border: "none",
  borderRadius: "5px",
  color: "white",
  fontFamily: "Noto Sans CJK KR",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "19px",
  textAlign: "center",
  cursor: "pointer",
});

export const socialLogin = style({
  marginTop: "8px",
  display: "flex",
  gap: "18px",
  justifyContent: "space-between",
  margin: "8px 0",
});

export const desciption = style({
  fontFamily: "Noto Sans CJK KR",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "19px",
  color: "#666666",
});
