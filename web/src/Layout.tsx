import type { PropsWithChildren } from "react";

import { Header } from "./components";

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main id="portalTarget">{children}</main>
    </div>
  );
}

export default Layout;
