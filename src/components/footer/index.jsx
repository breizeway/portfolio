import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/breizeway/portfolio">about this site</a> | ©{" "}
      {new Date().getFullYear()} Tannor Breitigam
    </footer>
  );
};

export default Footer;
