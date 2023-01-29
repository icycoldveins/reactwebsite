import React from "react";
import icon1 from "./images/282802_javascript_js_icon.png";
import icon2 from "./images/4373217_java_logo_logos_icon.png";
import icon3 from "./images/4375050_logo_python_icon.png";
import icon4 from "./images/7423887_react_react native_icon.png";
import myFile from "./Kevin_Wijaya_Resume.pdf";
function About() {
  return (
    <about>
      <div className="aboutme">
        <h1>About Me</h1>
        <p>
          Hi my name is Kevin, I currently am a junior in Computer Science at
          Temple University. I am currently looking for a summer internship for
          2023.
          <br />
          <br />I love reading korean webtoons and watching anime and I also
          love track and field, I am currently a member of the Temple University
          Track and Field club.
          <br />
          <br />
          In my sparetime I make userscripts to add certain functionalitiets to
          websites easier to use or solve a problem that I have.
          <br />
          <br />
          Right now I am trying to learn more about react and backend
          development in general.
        </p>
        <h2>Skills</h2>
        <div id="icons">
          <img src={icon1} alt="icons"></img>
          <img src={icon2} alt="icons"></img>
          <img src={icon3} alt="icons"></img>
          <img src={icon4} alt="icons"></img>
        </div>
        <br />
        <br />
        <a href={myFile}>
          <small>Resume</small>
        </a>
        <br />
        <br />
        <br />
      </div>
    </about>
  );
}
export default About;
