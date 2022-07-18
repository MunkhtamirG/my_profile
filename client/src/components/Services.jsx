import React from "react";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Front-End</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Back-End</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web application</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
