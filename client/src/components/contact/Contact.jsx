import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>munkhtamir.g@outlook.com</h5>
            <a href="mailto:munktamir.g@outlook.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Facebook Messenger</h5>
            <a href="https://m.me/Joe.ozy" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FaMobileAlt className="contact_option-icon" />
            <h4>Phone Number</h4>
            <h5>86502727</h5>
            <a href="tel:+97686502727" target="_blank">
              Call
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
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
}
