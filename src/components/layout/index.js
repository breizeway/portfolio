import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Footer from "../footer";
import Header from "../header";
import "./layout.css";

const Layout = ({ children, location }) => {
  const allSlugs = useStaticQuery(graphql`
    query allSlugs {
      allSitePage(
        filter: { path: { nin: ["/dev-404-page/", "/404.html", "/404/", "/"] } }
      ) {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  const navOptions = allSlugs.allSitePage.edges.map((edge) =>
    edge.node.path.split("/").join("")
  );

  let page = (location.pathname || "/").slice(1) || "home";
  if (page !== "home" && !navOptions.includes(page)) page = "404";

  const siteName = (location.origin || "//").split("//")[1];

  return (
    <div className="layout">
      <Helmet>
        <title>{`${page} | ${siteName}`}</title>
      </Helmet>
      <div className="layout-content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
