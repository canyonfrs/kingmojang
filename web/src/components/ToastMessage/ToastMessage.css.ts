import { style } from "@vanilla-extract/css";

export const Wrapper = style({
  width: "360px",
  height: "50px",
  display: "grid",
  borderRadius: "5px",
  backgroundColor: "#6358EE",
  justifyContent: "center",
  alignItems: "center",
  margin: 0,
});

export const Title = style({
  color: "white",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 700,
});

export const ViewPort = style({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  justifyContent: "center",
  marginTop: "27px",
  padding: 0,
});

export const Root = style({
  display: "grid",
});
