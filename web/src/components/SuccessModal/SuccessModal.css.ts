import { keyframes, style } from "@vanilla-extract/css";
import { rem } from "polished";

import { COLOR } from "../../styles/theme.css";

const drawCheck = keyframes({
  from: {
    strokeDashoffset: "30",
  },
  to: {
    strokeDashoffset: "60",
  },
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "650px",
  height: "340px",
  flexShrink: 0,
  borderRadius: "12px",
  border: "1px solid var(--gray-4, #CED4DA)",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.05)",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "11px",
});

export const checkWrapper = style({
  width: "90px",
  position: "relative",
});
export const check = style({
  width: "32px",
  position: "absolute",
  fill: "none",
  stroke: "green",
  strokeWidth: 4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeDasharray: 30,
  animation: `${drawCheck} 1s ease-in-out forwards`,
});

export const title = style({
  color: "var(--black, #242424)",
  fontSize: "26px",
  fontWeight: 700,
});

export const description = style({
  color: "var(--gray-7, #495057)",
  fontSize: "18px",
  fontWeight: 400,
});

export const homeButton = style({
  width: rem(300),
  height: rem(50),
  backgroundColor: COLOR.Primary,
  border: "none",
  borderRadius: "5px",
  color: "#FFF",
  fontSize: "16px",
  fontWeight: 700,
  zIndex: 100,
  cursor: "pointer",
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
