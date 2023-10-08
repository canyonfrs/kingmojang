import debounce from "lodash.debounce";
import { useEffect, useMemo } from "react";

import { usePreservedCallback } from "./usePreservedCallback";
import { usePreservedReference } from "./usePreservedReference";

// LINK: https://github.com/toss/slash/blob/2eca7df18dde17ab87cf6ae4fa0e4567619bc8e1/packages/react/react/src/hooks/useDebounce.ts#L4
export function useDebounce<F extends (...args: any[]) => any>(
  callback: F,
  wait: number,
  options: Parameters<typeof debounce>[2] = {},
) {
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedReference(options);

  const debounced = useMemo(() => {
    return debounce(preservedCallback, wait, preservedOptions);
  }, [preservedCallback, preservedOptions, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
