import { Link } from "gatsby";
import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__name">
        <Link to="/">Tannor Breitigam</Link>
      </h1>
    </div>
  );
};

export default Header;
