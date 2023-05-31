import { style } from "@vanilla-extract/css";

import { COLOR } from "../../styles/theme.css";

export const wrapper = style({
  width: "444px",
  height: "270px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const input_wrapper = style({
  position: "relative",
});

export const icon = style({
  position: "absolute",
  top: "12px",
  right: "18px",
});
export const input = style({
  width: "100%",
  height: "42px",
  borderRadius: "8px",
  padding: "8px 18px",
  border: `2px solid ${COLOR.Primary}`,
});

export const search_result = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "4px",
  borderRadius: "8px",
  backgroundColor: "white",
  overflowY: "auto",
  overflowX: "hidden",
  "::-webkit-scrollbar": {
    width: "5px",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#9E9E9E",
    height: "30px",
    borderRadius: "100px",
    width: "5px",
  },
  "::-webkit-scrollbar-track": {
    width: "15px",
  },
});

export const searchElement = style({
  display: "flex",
  alignItems: "center",
  height: "36px",
  minWidth: "50px",
  borderRadius: "8px",
  padding: "8px 18px",
  width: "420px",
  ":hover": {
    backgroundColor: "#f3f3f3",
  },
});

export const searchContent = style({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
});
