import React from "react";
import Layout from "../components/layout";
import HomeMdx from "../markdown-pages/home.mdx";
import "../styles/index.css";
import "./home.css";

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="home">
        <HomeMdx />
      </div>
    </Layout>
  );
};

export default Home;
