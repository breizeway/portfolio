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
              alt="A screenshot of the SongBird website preview image showing yellow buttons and a text input with song lyrics"
            />
          </div>
        }
        description="A simple markdown editor for lyrics that displays the whole song at once"
        liveSiteUrl="https://songbird.tannor.net"
        repoUrl="https://github.com/breizeway/tab-lab"
      />
      <Project
        title="Google Meet Input Toggler"
        image={
          <div className="project-image">
            <StaticImage
              src={`../../images/projects/meet-toggler.png`}
              alt="A screenshot of the Chrome extension store showing the Google Meet Input Toggler extension"
            />
          </div>
        }
        description="A Chrome extension to toggle your Google Meet microphone or camera with global shortcuts"
        liveSiteUrl="https://chrome.google.com/webstore/detail/google-meet-input-toggler/hcbgpbodachfejmoecbbjnabdmigecnb"
        repoUrl="https://github.com/breizeway/meet-toggler"
      />
      <Project
        title="This site"
        image={
          <div className="project-image">
            <StaticImage
              src={`../../images/projects/portfolio.png`}
              alt="A screenshot showing the site you're already on. Seems unnecessary."
            />
          </div>
        }
        description="A portfolio site to show off my skills and projects (You are here)"
        liveSiteUrl="https://tannor.net"
        repoUrl="https://github.com/breizeway/portfolio"
      />
      <div>
        <h4>And more...</h4>
        <p>
          I'm working on new things all the time. Take a look at{" "}
          <a href="https://github.com/breizeway?tab=repositories">
            my Github repositories page
          </a>{" "}
          to see more (including an embarrassing array of old projects that
          likely don't work anymore).
        </p>
      </div>
    </div>
  );
};

export default Projects;
