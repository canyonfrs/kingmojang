import { useEffect, useState } from "react";

type NotNullishValue = {};

// LINK: https://github.com/toss/slash/blob/main/packages/react/react/src/hooks/usePreservedReference.ts#L7
export function usePreservedReference<T extends NotNullishValue>(
  value: T,
  areValuesEqual: (a: T, b: T) => boolean = areDeeplyEqual,
) {
  const [reference, setReference] = useState<T>(value);

  useEffect(() => {
    if (!areValuesEqual(value, reference)) {
      setReference(value);
    }
  }, [areValuesEqual, reference, value]);

  return reference;
}

function areDeeplyEqual<T extends NotNullishValue>(x: T, y: T) {
  return JSON.stringify(x) === JSON.stringify(y);
}
