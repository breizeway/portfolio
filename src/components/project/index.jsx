import React from "react";
import "./project.css";

export const Project = ({
  title,
  image,
  description,
  liveSiteUrl,
  repoUrl,
}) => {
  return (
    <div className="project">
      <h4>{title}</h4>
      {image}
      <p>
        <a href={liveSiteUrl}>Live Site</a> * <a href={repoUrl}>Github</a>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
