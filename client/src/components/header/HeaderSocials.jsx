import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div>
      <div className="header_socials">
        <a href="https://github.com/MunkhtamirG" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/ozyygram/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://discordapp.com/users/3384/" target="_blank">
          <BsDiscord />
        </a>
      </div>
    </div>
  );
}
