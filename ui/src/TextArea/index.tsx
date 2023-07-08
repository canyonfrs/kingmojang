import classNames from "classnames";
import type { Ref, TextareaHTMLAttributes } from "react";
import { forwardRef, useId } from "react";

import * as Style from "./style.css";

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  label?: string;
}

export const TextArea = forwardRef(function TextArea(
  { className, label, ...props }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement>,
) {
  const id = useId();

  return (
    <div className={Style.WrapperStyle}>
      {label && (
        <label className={Style.LabelStyle} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={classNames(className, Style.TextAreaStyle)}
        {...props}
      />
    </div>
  );
});
