import type { ChangeEvent } from "react";
import { useEffect, useRef, useState } from "react";

import * as Style from "./PinInput.css";

interface PinInputInterface {
  count: number;
  button?: React.ReactNode;
  nextRef: React.RefObject<HTMLButtonElement>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

export default function PinInput({
  count,
  nextRef,
  setResult,
}: PinInputInterface) {
  const [code, setCode] = useState<string>(new Array(count).fill("").join(""));
  const digitWrapperRef = useRef<HTMLDivElement>(null);

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setResult(ev.target.value);
    setCode(ev.target.value);
  };

  useEffect(() => {
    if (code.length === count) {
      nextRef.current?.focus();
    }
  }, [code]);

  return (
    <div className={Style.digitWrapper} ref={digitWrapperRef}>
      <input
        id="code"
        onChange={handleInput}
        maxLength={8}
        style={{ opacity: 0, position: "absolute", bottom: 0 }}
        autoComplete="off"
        autoFocus
      />
      {new Array(count).fill(0).map((_, i) => (
        <label htmlFor="code" className={Style.number} key={i}>
          {code[i]}
          <div className={Style.cursor({ selected: code.length === i })}></div>
        </label>
      ))}
    </div>
  );
}
