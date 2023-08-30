import { IconCheckCircle, IconWarning } from "@kingmojang/icon";
import classNames from "classnames";
import type { InputHTMLAttributes, Ref } from "react";
import { forwardRef, useId } from "react";

import * as Style from "./style.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label?: string;
  infoType?: "warning" | "success" | "nothing";
  infoText?: string;
  iconSize?: number;
  textStyle?: React.CSSProperties;
}

export const TextField = forwardRef(function TextField(
  {
    className,
    label,
    infoText,
    infoType,
    textStyle,
    iconSize,
    ...props
  }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  const id = useId();

  return (
    <div className={Style.WrapperStyle}>
      {label && (
        <label className={Style.LabelStyle} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        className={classNames(className, Style.TextFieldStyle)}
        {...props}
      />
      {infoType !== "nothing" && infoType !== undefined && (
        <div className={Style.InfoWrapper}>
          {infoType === "success" ? (
            <IconCheckCircle width={iconSize ? iconSize : 20} />
          ) : infoType === "warning" ? (
            <IconWarning width={iconSize ? iconSize : 20} />
          ) : null}
          {infoText && (
            <p style={{ ...textStyle, textAlign: "center" }}>{infoText}</p>
          )}
        </div>
      )}
    </div>
  );
});
