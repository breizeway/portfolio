import React from "react";
import "../../styles/index.css";
import Footer from "../footer";
import Header from "../header";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
