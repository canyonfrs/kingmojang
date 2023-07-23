import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const Container = style({
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  margin: "0 auto",
});

export const DeleteButton = style({
  color: "#CED4DA",
  fontSize: rem(16),
  fontWeight: "bold",
  cursor: "pointer",
  border: "none",
  backgroundColor: "transparent",
});

export const MemoList = style({
  width: rem(1160),
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  margin: "0 auto",
  padding: 0,
  gap: rem(13),
});

export const MemoItem = style({});
