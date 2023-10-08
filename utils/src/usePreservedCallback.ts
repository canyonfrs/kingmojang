import { useCallback, useEffect, useRef } from "react";

// LINK: https://github.com/toss/slash/blob/main/packages/react/react/src/hooks/usePreservedCallback.ts#L4
export function usePreservedCallback<Callback extends (...args: any[]) => any>(
  callback: Callback,
) {
  const callbackRef = useRef<Callback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args: any[]) => {
      return callbackRef.current(...args);
    },
    [callbackRef],
  ) as Callback;
}
