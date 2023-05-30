import { createPortal } from "react-dom";

import { background } from "./Portal.css";

export interface PortalProps {
  // variant: keyof typeof background;
  onClose: () => void;
  children: React.ReactNode;
  hasBackground: boolean;
  id: string;
}

export default function Portal({
  onClose,
  children,
  id,
  // variant,
  hasBackground,
}: PortalProps) {
  const modalContainer = document.getElementById("portalTarget");
  return (
    <div>
      {modalContainer
        ? createPortal(
            <div
              id={id}
              className={
                hasBackground ? background["hasDimmer"] : background["noDimmer"]
              }
              onClick={onClose}
            >
              <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>,
            modalContainer,
          )
        : null}
    </div>
  );
}
