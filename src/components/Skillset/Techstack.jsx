import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,  
} from "react-icons/di";
import {
  SiAmazons3,
  SiPlesk,
  SiMongodb,
  SiHtml5,
  SiAmazonaws,
  SiLinux,
  SiAmazonec2,
  SiDjango,
  SiCpanel,
  SiPython,
  SiGithub,
  SiAwslambda,
  SiAmazonroute53,
  SiRedhat,
  SiAnsible ,
  SiMysql ,
  SiAmazonrds,
  SiLinuxfoundation 

} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedhat   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiLinuxfoundation />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonroute53  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonrds />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlesk  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCpanel  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

    </Row>
  );
}

export default Techstack;
