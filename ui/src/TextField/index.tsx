import { IconCheckCircle, IconWarning } from "@kingmojang/icon";
import classNames from "classnames";
import type { InputHTMLAttributes, Ref } from "react";
import { forwardRef, useId } from "react";

import * as Style from "./style.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label?: string;
  hasError?: boolean;
  hasInfo?: boolean;
  errorText?: string;
  infoText?: string;
  iconSize?: number;
  textStyle?: React.CSSProperties;
}

export const TextField = forwardRef(function TextField(
  {
    className,
    label,
    hasError,
    hasInfo,
    infoText,
    errorText,
    iconSize,
    textStyle,
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
      {hasError && (
        <div className={Style.InfoWrapper}>
          <IconWarning width={iconSize ? iconSize : 20} />
          <p style={{ ...textStyle, textAlign: "center" }}>{infoText}</p>
        </div>
      )}
      {hasInfo && (
        <div className={Style.InfoWrapper}>
          <IconCheckCircle width={iconSize ? iconSize : 20} />
          <p style={{ ...textStyle, textAlign: "center" }}>{infoText}</p>
        </div>
      )}
    </div>
  );
});
