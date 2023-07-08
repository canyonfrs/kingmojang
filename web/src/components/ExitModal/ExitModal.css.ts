import { style } from "@vanilla-extract/css";
import { rem } from "polished";

export const Container = style({
  width: rem(478),
  height: rem(250),
  borderRadius: rem(12),
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Description = style({
  fontSize: rem(20),
});

export const Title = style({
  fontSize: rem(24),
});

export const ButtonWrapper = style({
  display: "flex",
  gap: rem(14),
});

export const SecondButton = style({
  width: rem(188),
  height: rem(50),
  color: "white",

  fontWeight: "bold",
  backgroundColor: "#CED4DA",
});

export const PrimaryButton = style({
  width: rem(188),
  height: rem(50),
  color: "white",
  backgroundColor: "#6358EE",

  fontWeight: "bold",
});
