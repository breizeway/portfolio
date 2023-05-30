import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Project from "../project";
import "./projects.css";

export const Projects = ({}) => {
  return (
    <div className="projects">
      <Project
        title="SongBird"
        image={
          <div className="project-image">
            <StaticImage
              src={`../../images/projects/song-bird.png`}
              alt="SongBird website preview image showing yellow buttons and a text input with song lyrics"
            />
          </div>
        }
        description="A simple markdown editor for lyrics that displays the whole song at once"
        liveSiteUrl="https://songbird.tannor.net"
        repoUrl="https://github.com/breizeway/tab-lab"
      />
    </div>
  );
};

export default Projects;
