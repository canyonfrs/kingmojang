import { IconCheckCircle, IconWarning } from "@kingmojang/icon";
import classNames from "classnames";
import type { InputHTMLAttributes, Ref } from "react";
import { forwardRef, useId } from "react";

import * as Style from "./style.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label?: string;
  infoType?: "warning" | "success";
  infoText?: string;
}

export const TextField = forwardRef(function TextField(
  { className, label, infoText, infoType, ...props }: InputProps,
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
      <div className={Style.InfoWrapper}>
        {infoType && infoType === "success" ? (
          <IconCheckCircle width={20} />
        ) : infoType === "warning" ? (
          <IconWarning width={20} />
        ) : null}
        <p>{infoText}</p>
      </div>
    </div>
  );
});
