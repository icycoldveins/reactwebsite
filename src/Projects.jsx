import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import shoes from "./images/photo-1579198413527-1d9d1a80dff8.jpeg";
import webtoon from "./images/06webtoons-superJumbo.jpg";
import portfolio from "./images/photo-1502945015378-0e284ca1a5be.jpeg";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardLink,
  CardGroup,
} from "reactstrap";
function Projects() {
  return (
    <proj>
      <div className="projtitle">
        <h1>Projects</h1>
      </div>
      <br />
      <br />
      <CardGroup>
        <Card>
          <CardImg alt="Card image cap" src={shoes} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Price Checker</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Python
            </CardSubtitle>
            <CardText>
              A scraper using bs4 that scrapes nike for a shoe and emails the
              user when there is a drop in price
            </CardText>

            <a href="https://github.com/icycoldveins">
              <Button>
                <FaGithub></FaGithub>
              </Button>
            </a>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={webtoon} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Webtoon Navigator</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Javascript
            </CardSubtitle>
            <CardText>
              Made a Userscript to navigate my favorite webtoon site using the
              left and right arrow keys.(7 users)
            </CardText>
            <a href="https://github.com/icycoldveins">
              <Button>
                <FaUser></FaUser>
              </Button>
            </a>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={portfolio} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Portfolio Website</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Javascript,React,HTML and CSS
            </CardSubtitle>
            <CardText>
              A Portfolio Website made using react, the reactstrap library,
              JavaScript, HTML and CSS
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </proj>
  );
}
export default Projects;
