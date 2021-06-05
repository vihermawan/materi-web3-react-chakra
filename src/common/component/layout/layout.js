import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
