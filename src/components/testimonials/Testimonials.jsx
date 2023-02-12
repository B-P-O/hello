import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Ade Vic",
    review:
      "Thank you to so much for your service i really love the website 😍",
  },
  {
    avatar: AVTR2,
    name: "Ronke Clothing",
    review:
      " i have been looking for a reliable developer for a while you are amazing 👍🤞",
  },
  {
    avatar: AVTR3,
    name: "Proverbial",
    review: "your service is accurate and efficient🚀🚚",
  },
  {
    avatar: AVTR4,
    name: "Goody Media",
    review:
      "I have never thought of meeting a better software developer in Nigeria, You proof me Wrong.🙌👏",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install
        // Swiper
        // modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials_container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="AVATAR" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
