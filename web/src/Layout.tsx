import type { PropsWithChildren } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

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
