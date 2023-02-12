import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small> 2+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>WorldWide</small>
            </article>
          </div>

          <i>
            I'm proficiency in JavaScript, including DOM manipulation and the
            JavaScript object model Thorough understanding of React.js and its
            core principles Experience with popular React.js workflows (Redux)
            Familiarity with newer specifications like Next js, React Router ,
            Experience with data structure libraries Immer,Familiarity with
            GRAPHQL APOLLO APIs, Knowledge of modern authorization mechanisms,
            such as JSON Web Token, Familiarity with modern front-end build
            pipelines and tools, Experience with common front-end development
            tools NPM. Ability to understand business requirements and translate
            them into technical requirements, A knack for benchmarking and
            optimization,Familiarity with code versioning tools like Git.
          </i>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
