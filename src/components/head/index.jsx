import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Head = ({ location }) => {
  const pagesQuery = useStaticQuery(graphql`
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

  const pages = pagesQuery.allSitePage.edges.map((edge) =>
    edge.node.path.split("/").join("")
  );

  let pageName = (location?.pathname || "/").slice(1) || "home";
  if (pageName !== "home" && !pages.includes(pageName)) pageName = "404";

  const siteName = "tannor.net";
  const title = `${pageName} | ${siteName}`;

  return <title>{title}</title>;
};
