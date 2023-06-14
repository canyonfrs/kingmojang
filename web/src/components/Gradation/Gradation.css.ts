import { style } from "@vanilla-extract/css";

import { COLOR } from "../../styles/theme.css";

export const gradationTop = style({
  position: "absolute",
  left: "78.49%",
  right: "-34.53%",
  top: "-63.06%",
  bottom: "66.94%",
  background: `linear-gradient(90deg, #9181E9 -0.02%, ${COLOR.Primary} 64.42%)`,
  opacity: "0.15",
  filter: "blur(100px)",
});

export const gradationBottom = style({
  position: "absolute",
  width: "1088px",
  height: "1088px",
  left: "-850px",
  bottom: "-800px",
  background: `${COLOR.Sub}`,
  opacity: 0.2,
  filter: "blur(150px)",
});
