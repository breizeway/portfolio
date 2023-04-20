import React from "react";
import Layout from "../components/layout";

const New = () => {
  return (
    <Layout>
      <div className="home">
        <p>
          <a href="https://github.com/breizeway/">Github</a> *{" "}
          <a href="https://www.linkedin.com/in/tannor/">LinkedIn</a>
        </p>
        <br />
        <p>Hey there 👋</p>
        <p>
          Welcome to my website! It's here to give a brief intro to who I am
          professionally, and of course to show that{" "}
          <strong>I can make things with code</strong>.
        </p>
        <h2>who i am</h2>
        <p>
          I'm a <strong>full-stack software engineer</strong> living in
          Portland, Oregon. My family and I love it here, and my dream career in
          tech is to learn and grow in this community as part of an intimate and
          collaborative team.
        </p>
        <p>
          I've been in tech for 2-3 years now, and in that time I've worked out
          that my biggest strength is <strong>adaptability</strong> and{" "}
          <strong>willingness to explore</strong> new things. I've yet to find a
          stack I can't make myself useful in, and quickly.
        </p>
        <h2>what i'm good at</h2>
        <p>
          My strongest skills are on the frontend with{" "}
          <strong>JavaScript/TypeScript and React</strong>. I like to write
          semantic HTML and work way too hard to get styling just right.
        </p>
        <p>
          I've been writing <strong>SQL</strong> for about 10 years since I was
          s student worker in college, which only became more relevant when I
          most recently transitioned to backend development where I gained
          experience building{" "}
          <strong>
            serverless APIs (both GraphQL and REST) written in Scala, using AWS
          </strong>
          .
        </p>
        <p>
          I also enjoy scripting and automation (I even write JavaScript on my
          phone?), have an <strong>eye for good design</strong> (I actually like{" "}
          <strong>CSS</strong>. Really.), and have a firm belief in{" "}
          <strong>clear, honest communication</strong>.
        </p>
        <h3>languages and technologies</h3>
        <ul>
          <li>TypeScript</li>
          <li>CSS</li>
          <li>React</li>
          <li>Scala</li>
          <li>SQL</li>
          <li>GraphQL</li>
        </ul>
        <h2>where i've worked</h2>
        <p>
          I have a background in finance and higher education, having come to
          tech as my second career. At my first job in tech at Flow Finance, I
          was{" "}
          <strong>
            quickly marked for promotion from junior to mid within 6 months
          </strong>
          .
        </p>
        <h3>Flow Finance</h3>
        <p>
          <strong>Software Engineer, Backend</strong> *{" "}
          <em>Jul 2022 - Jan 2023</em>
        </p>
        <p>
          My primary responsibility was to build and maintain an API for
          initiating and managing customer OAuth integrations. We built SAM
          applications in Scala, leveraging AWS Lambda, AppSync, API Gateway
          (and more) to expose both REST and GraphQL APIs to internal
          applications.
        </p>
        <p>
          <strong>Junior Software Engineer, Frontend</strong> *{" "}
          <em>Jul 2021 - Jul 2022</em>
        </p>
        <p>
          Developed major features for new and existing internal web apps with
          Typescript, React, and Redux. Worked closely with our product and
          design teams, using CSS and Tailwind to create beautiful UI and
          thoughtful UX.
        </p>
        <h3>University of Redlands and Walla Walla University</h3>
        <p>
          Before I became a Software Engineer, I worked in higher education in
          various tech-adjacent roles in academic records and financial aid,
          both at Walla Walla University and University of Redlands. I{" "}
          <strong>wrote SQL and managed BI systems</strong>, tuition AR/AP, and
          departmental IS support and maintenance. I also briefly served as an
          interim Director of Institutional Research.
        </p>
        <h2>what i've studied</h2>
        <h3>Full-Stack Web Development</h3>
        <p>
          I graduated from <a href="https://www.appacademy.io/">App Academy</a>{" "}
          (an intense 1000+ hour bootcamp with a &lt; 4% acceptance rate) after
          attending from November 2020 to April 2021.
        </p>
        <h3>Business Administration / Finance</h3>
        <ul>
          <li>
            I have my <strong>MBA</strong> (Finance concentration) from
            University of Redlands where I attended from 2018 - 2019.
          </li>
          <li>
            Before that, I went to Walla Walla University from 2011 - 2015 where
            I got my <strong>BBA</strong> (Bachelor of Business Administration,
            also with a Finance concentration).
          </li>
        </ul>
        <h2>would you like to know more?</h2>
        <p>Send me an email 👇</p>
      </div>
    </Layout>
  );
};

export default New;
