import { createPortal } from "react-dom";

import { background } from "./Portal.css";

interface SectionProps {
  variant: keyof typeof background;
  onClose: any;
  children: React.ReactNode;
}

export default function Portal({ onClose, children, variant }: SectionProps) {
  const modalContainer = document.getElementById("portalTarget");
  return (
    <div>
      {modalContainer
        ? createPortal(
            <div className={background[variant]} onClick={onClose}>
              <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>,
            modalContainer,
          )
        : null}
    </div>
  );
}
