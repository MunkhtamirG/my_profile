import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src="http://localhost:3001/images/profile.jpg" alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>+3 Months Studing</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>Not Have Yet</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            velit repellendus excepturi id, necessitatibus adipisci cumque quam.
            Asperiores, rerum similique sint, commodi error praesentium
            veritatis dolor odit provident numquam itaque.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
