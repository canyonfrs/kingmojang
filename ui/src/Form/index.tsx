import type { FormEvent, HTMLAttributes, Ref } from "react";
import { forwardRef, useCallback } from "react";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {}

export const Form = forwardRef(function Form(
  { children, onSubmit = () => {}, ...props }: FormProps,
  ref: Ref<HTMLFormElement>,
) {
  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    },
    [onSubmit],
  );

  return (
    <form ref={ref} {...props} onSubmit={handleFormSubmit}>
      {children}
    </form>
  );
});
