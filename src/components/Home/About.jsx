import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Mohammad Faizan Qureshi</span> and I'm from
              <span className="yellow"> Nashik, Maharashtra, India.</span>
              <br />
              <br />
              I graduated with a Bachelor's degree in Arts in 2020.
              <br />
              <br />
              As a <b className="yellow">Full-Stack Developer</b> & <b className="yellow">Cloud Engineer</b>,
              I enjoy solving complex problems and continuously expanding my skill set.
              <br />
              <br />
              I am proficient in <b className="yellow">Amazon Web Services (AWS)</b> and have experience
              with programming languages and technologies such as <b className="yellow">Django (Python), React (JavaScript),</b>
              and <b className="yellow">Ansible (Automation).</b>
              <br />
              <br />
              My expertise extends to <b className="yellow">Cloud Solutions Architecture</b>,
              <b className="yellow"> DevOps, and Troubleshooting</b>.
              I am also passionate about working with modern JavaScript frameworks like
              <i>
                <b className="yellow"> React.js</b>
              </i>.
              <br />
              <br />
              Additionally, I am interested in developing innovative
              <i>
                <b className="yellow"> Web Technologies and Products</b>
              </i>, as well as exploring emerging trends in
              <b className="yellow"> DevOps</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect</span> with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fqthedeveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/faizan-qureshi-developer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mr_qureshi_faizan_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
