import React from "react";
// import helmet
import { FaSpotify } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SocialMediaContact() {
  return (
    <div className="social-media-contact">
      <br />
      <br />
      <br />
      <h1>Contact</h1>
      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/kevin-wijaya-26670b22b">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="mailto:kevin.wijaya@temple.edu">
          <FaEnvelope></FaEnvelope>
        </a>
        <a href="https://github.com/icycoldveins">
          <FaGithub></FaGithub>
        </a>
      </div>
    </div>
  );
}

export default SocialMediaContact;
