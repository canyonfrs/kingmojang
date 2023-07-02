import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { rem } from "polished";

import { COLOR } from "../../styles/theme.css";

const blink = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const number = style({
  width: rem(40),
  height: rem(50),
  backgroundColor: "#e9e9e9",
  border: "none",
  borderRadius: "5px",
  color: `${COLOR.Primary}`,
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "19.14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const digitWrapper = style({
  display: "flex",
  gap: "6px",
});

export const cursor = recipe({
  base: {
    display: "none",
    width: "1px",
    height: "20px",
  },
  variants: {
    selected: {
      true: {
        display: "block",
        borderRight: "1px solid black",
        animation: `${blink} 1s infinite`,
      },
    },
  },
});
