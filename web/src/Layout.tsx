import type { PropsWithChildren } from "react";

import { Footer, Header } from "./components";

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
