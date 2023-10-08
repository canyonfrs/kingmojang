import { keyframes, style } from "@vanilla-extract/css";

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const content = style([
  {
    background: "#fff",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",

    width: "300px",
    height: "calc(100vh - 76px)",
    overflowY: "auto",

    selectors: {
      '&[data-state="open"]': {
        animation: `${fadeIn} 200ms ease`,
      },
    },
  },
]);

export const menubarItem = style({
  display: "flex",

  justifyContent: "center",
  flexDirection: "column",

  marginTop: "12px",
  padding: "8px 16px",

  cursor: "pointer",

  selectors: {
    "&:hover": {
      background: "#f5f5f5",
    },
  },
});

export const menubarContent = style({
  color: "#696969",

  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",

  fontSize: "14px",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
