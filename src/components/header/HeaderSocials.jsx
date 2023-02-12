import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/babatuyi-paul-220541222/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/paulbabatuyi/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/paulbabatuyi/"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/paulbabatuyi/"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
