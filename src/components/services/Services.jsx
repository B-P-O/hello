import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>React Developer</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_List-icon" />
              <p>Developing new user-facing features using React.js</p>
            </li>
            <li>
              <BiCheck className="service_List-icon" />
              <p>
                Building reusable components and front-end libraries for future
                use
              </p>
            </li>
            <li>
              <BiCheck className="service_List-icon" />
              <p>Translating designs and wireframes into high quality code</p>
            </li>
            <li>
              <BiCheck className="service_List-icon" />
              <p>
                Optimizing components for maximum performance across a vast
                array of web-capable devices and browsers
              </p>
            </li>
            <li>
              <BiCheck className="service_List-icon" />
              <p>
                We build state of art React-based applications for our clients{" "}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
