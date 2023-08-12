import { Toast } from "@kingmojang/ui";

import * as Style from "./ToastMessage.css";

interface ToastMessageInterface {
  isOpen: boolean;
  content: string;
  time?: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ToastMessage({
  isOpen,
  content,
  time,
  setIsOpen,
}: ToastMessageInterface) {
  return (
    <Toast.Provider swipeDirection="down">
      <Toast.Root
        className={Style.Wrapper}
        open={isOpen}
        onOpenChange={setIsOpen}
        duration={time}
      >
        <Toast.Title className={Style.Title}>{content}</Toast.Title>
      </Toast.Root>
      <Toast.Viewport className={Style.ViewPort} />
    </Toast.Provider>
  );
}
