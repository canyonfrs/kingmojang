import { createPortal } from "react-dom";

import { modal, modal_wrapper } from "./Portal.css";

export default function Portal({ onClose, children }: any) {
  return (
    <div>
      {createPortal(
        <div className={modal_wrapper} onClick={onClose}>
          <div className={modal} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
