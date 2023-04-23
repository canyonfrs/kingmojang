import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const wrapperStyle = style({
  width: rem(378),
  height: rem(364),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: rem(12),
  backgroundColor: "#fff",
});

export const headerStyle = style({
  height: rem(76),
  display: "flex",
  alignItems: "center",
  padding: "16px 14px",
  borderBottom: "1px solid #d9d9d9",
});

export const profileImageStyle = style({
  width: rem(48),
  height: rem(48),
  marginRight: rem(12),
  borderRadius: rem(24),
});

export const headerInfoStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const createrNameStyle = style({
  fontSize: rem(16),
  fontWeight: "bold",
});

export const createdDateStyle = style({
  fontSize: rem(14),
  color: "#8b8b8b",
});

export const mainStyle = style({
  fontSize: rem(16),
  padding: rem(16),
  height: "100%",
  lineHeight: rem(26),
  overflow: "hidden",
  whiteSpace: "pre-wrap",
});

export const footerStyle = style({
  height: rem(52),
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: "0px 16px 16px",
});

export const footerItemStyle = style({
  margin: "0 8px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  fontSize: rem(14),
  color: "#8b8b8b",
});
