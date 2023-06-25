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
