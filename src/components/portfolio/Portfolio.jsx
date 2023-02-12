import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Exchange Rate calculator",

    // demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG6,
    title: "Meal finder",

    // demo: "https://dribbble.com/shots/16580766-Origin-UI-kit-Charts-templates-infographics-in-figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "lyrics Search",

    // demo: "https://dribbble.com/shots/16580766-Origin-UI-kit-Charts-templates-infographics-in-figma",
  },
  {
    id: 4,
    image: IMG2,
    title: "Ticktok-clone",

    // demo: "https://dribbble.com/shots/16580766-Origin-UI-kit-Charts-templates-infographics-in-figma",
  },
  {
    id: 5,
    image: IMG5,
    title: "Netflix-clone",

    // demo: "https://dribbble.com/shots/16580766-Origin-UI-kit-Charts-templates-infographics-in-figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio_item-cta">
                <a href={demo} className="btn btn-primary" target="_black">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
