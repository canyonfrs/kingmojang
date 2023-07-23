import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const WrapperStyle = style({
  position: "relative",
  overflow: "hidden",
  width: rem(378),
  height: rem(288),
  borderRadius: rem(12),
  boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.75)",
});

export const DateStyle = style({
  fontSize: rem(14),
});

export const MainStyle = style({
  fontSize: rem(16),
  padding: rem(16),
  height: "100%",
  lineHeight: rem(26),
  overflow: "hidden",
  whiteSpace: "pre-wrap",
});

export const FooterStyle = style({
  position: "absolute",
  width: "100%",
  left: 0,
  bottom: 0,
  height: rem(52),
  color: "#8B8B8B",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: "0px 16px 16px",
});

export const FooterGradient = style({
  top: -80,
  left: 0,
  position: "absolute",
  height: "80px",
  width: "100%",
  background: "linear-gradient(to top, #ffffff, rgba(255,255,255,0))",
});

export const FooterLeft = style({
  display: "flex",
});

export const FooterItemStyle = style({
  margin: "0 8px",
  display: "flex",
  alignItems: "center",
  fontSize: rem(14),
  color: "#8b8b8b",
});
