import React from "react";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l48ep7q",
      "template_rdmm1i6",
      form.current,
      "NWpBW-woanyTmPq5S"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>Pauloluwadamilare912@gmail.com</h5>
            <a
              href="mailto:Pauloluwadamilare912@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaTwitter className="contact_option-icon" />
            <h4>Twitter</h4>
            <h5>Paul Babatuyi</h5>
            <a
              href="https://twitter.com/paulbabatuyi/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=08085212177"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
            <h5>📞 08085212177</h5>
          </article>
        </div>
        {/*end of options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
