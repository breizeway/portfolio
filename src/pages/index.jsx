import React from "react";
import { Head as _Head } from "../components/head";
import MdxHome from "../markdown-pages/home.mdx";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <MdxHome />
    </div>
  );
};

// need to redeclare to properly export Head from the home page
export const Head = _Head;
export default Home;
