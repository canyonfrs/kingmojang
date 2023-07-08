import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { rem } from "polished";

export const Wrapper = style({
  width: rem(450),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const ProfileImageWrapper = style({
  position: "relative",
  width: rem(138),
  height: rem(138),
  borderRadius: "50%",
});

export const ProfileImage = style({
  width: "100%",
  height: "100%",
});

export const CameraIcon = style({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: rem(52),
  height: rem(52),
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid white",
  backgroundColor: "#CED4DA",
});

export const InputRow = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const InputTitle = style({
  fontSize: rem(16),
  fontWeight: "bold",
});

export const Input = style({
  width: rem(210),
  height: rem(40),
  backgroundColor: "#F7F7F9",
  paddingLeft: rem(14),
  border: "none",
  borderRadius: rem(5),
});

export const Button = recipe({
  base: {
    width: rem(150),
    height: rem(40),
    color: "#8B8B8B",
    border: "1px solid #8B8B8B",
    borderRadius: rem(5),
    backgroundColor: "white",
    cursor: "pointer",
  },
  variants: {
    valid: {
      true: {
        color: "white",
        backgroundColor: "#6358EE",
      },
    },
  },
});

export const LongButton = style({
  width: rem(368),
  height: rem(40),
  color: "#8B8B8B",
  border: "1px solid #8B8B8B",
  borderRadius: rem(5),
  backgroundColor: "white",
  cursor: "pointer",

  ":hover": {
    color: "white",
    backgroundColor: "#6358EE",
  },
});

export const LinkList = style({
  display: "flex",
  width: rem(368),
  padding: 0,
  margin: 0,
});

export const LinkItem = style({
  width: rem(40),
  height: rem(40),
  backgroundColor: "#CED4DA",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
});

export const LinkInput = style({
  width: rem(210),
  height: rem(40),
  backgroundColor: "#F7F7F9",
  paddingLeft: rem(14),
  border: "none",
  borderRadius: rem(5),
});

export const InvalidLInk = style({
  height: rem(30),
  display: "flex",
  gap: rem(2),
  alignItems: "center",
});

export const SuccessMessage = style({
  padding: "15px 30px",
  backgroundColor: "#6358ee",
  color: "white",
  borderRadius: rem(5),
});
