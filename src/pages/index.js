import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";
import MDXWrapper from "../components/mdx-wrapper";
import "../styles/index.css";
import "./home.css";

const Home = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      mdx(slug: { eq: "home" }) {
        body
      }
    }
  `);

  const { body } = data.mdx;

  return (
    <Layout location={location}>
      <div className="home">
        <MDXWrapper>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXWrapper>
      </div>
    </Layout>
  );
};

export default Home;
