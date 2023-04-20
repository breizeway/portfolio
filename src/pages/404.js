import React from "react";
import Layout from "../components/layout";
import Markdown404 from "../markdown-pages/404.mdx";

const NotFound = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="not-found">
        <Markdown404 />
      </div>
    </Layout>
  );
};

export default NotFound;
