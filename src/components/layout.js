import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import "../styles/layout.css";
import Footer from "./footer";
import Header from "./header";

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

  let title = location.pathname.slice(1) || "home";
  if (title !== "home" && !navOptions.includes(title)) title = "404";

  return (
    <div className="layout">
      <Helmet>
        <title>{`${title} | tannor.net`}</title>
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
