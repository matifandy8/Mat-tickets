import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;