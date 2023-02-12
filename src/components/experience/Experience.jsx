import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS3</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <div>
                <h4>SASS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light"> Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Next js</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Style Component</h4>
                <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>GRAPHQL APOLLO</h4>
                <small className="text-light"> Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React Query</h4>
                <small className="text-light"> Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
