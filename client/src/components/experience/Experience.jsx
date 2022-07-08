import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>Typescript</h4>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>Node JS</h4>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <h4>Express JS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
