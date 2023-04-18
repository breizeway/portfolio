import React from "react";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/breizeway/portfolio">about this site</a> | ©
      Tannor Breitigam {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
