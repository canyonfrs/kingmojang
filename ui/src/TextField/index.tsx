import classNames from "classnames";
import type { HTMLAttributes, Ref } from "react";
import { forwardRef, useId } from "react";

import * as Style from "./style.css";

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "id"> {
  label?: string;
}

export const TextField = forwardRef(function TextField(
  { className, label, ...props }: InputProps,
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
    </div>
  );
});
