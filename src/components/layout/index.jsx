import React from "react";
import "../../styles/index.css";
import Footer from "../footer";
import { Head } from "../head";
import Header from "../header";
import "./layout.css";

export const Layout = ({ location, children }) => {
  return (
    <>
      <Head location={location} />
      <div className="layout">
        <div className="layout-content">
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
