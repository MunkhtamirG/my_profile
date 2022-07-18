import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";

export default function Header({ profileData }) {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>{profileData?.firstname}</h1>
        <h5 className="text-light">{profileData?.major}</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">{/* <img src={} alt="me" /> */}</div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
