import React from "react";
import "./header.css";
import ME from "../../assets/profile.jpg";

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Munkhtamir</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
}
