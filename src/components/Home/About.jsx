import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Mohammad Faizan Qureshi </span>
                 and I'm from <span className="yellow"> Nashik, Maharashtra, India.</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in Arts 2020.
                <br />
                <br />
                  As a
                <b className="yellow"> Full-Stack </b>developer, & <b className="yellow"> Cloud Enginner </b>computing,<br /> 
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Amazon Web Service(AWS) </b>
                    as well as have knowledge in programming languages such as Django(Python),React(Javascript), and Ansible(Automation)
                  <b className="yellow"> Cloud Solution Architect</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Cloud, Devops, Troubleshooting</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Devops.</b>
                  </i>
                  <br />
                  
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
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/fqthedeveloper"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
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
                      className="icon-colour  home-social-icons"
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
      );
    
}

export default About