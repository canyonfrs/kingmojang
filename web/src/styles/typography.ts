type SizeProps =
  | "12"
  | "14"
  | "16"
  | "18"
  | "20"
  | "24"
  | "26"
  | "28"
  | "32"
  | "34";
type WeightProps = "400" | "500" | "700";
type FontProps = "Noto Sans" | "Roboto" | "Pretendard";

type TypographyProps = {
  size?: SizeProps;
  weight?: WeightProps;
  font?: FontProps;
};

export const Typography = ({ font, size, weight }: TypographyProps) => ({
  fontSize: `${size}px` || "1rem",
  fontWeight: `${weight}` || "400",
  fontFamily: `${font}` || "Noto Sans",
});
