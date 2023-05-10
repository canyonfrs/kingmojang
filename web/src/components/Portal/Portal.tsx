import { createPortal } from "react-dom";

import { modal_wrapper } from "./Portal.css";

export default function Portal({ onClose, children }: any) {
  return (
    <div>
      {createPortal(
        <div className={modal_wrapper} onClick={onClose}>
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>,
        document.body,
      )}
    </div>
  );
}
