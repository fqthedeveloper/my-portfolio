import React from "react";
import { Col, Row } from "react-bootstrap";
import AWSCSAA from '../../assets/badges/aws-csaa.png'
import AWSKA from '../../assets/badges/aws-knowledge-architecting.png'
import AWSKCE from '../../assets/badges/aws-knowledge-cloud-essentials (1).png'
import POA from '../../assets/badges/plesk-obsidian-associate.png'
import AWSEIC from '../../assets/badges/aws-educate-introduction-to-cloud-101.png'
import CPP from '../../assets/badges/cpp_badge.svg'
import AWSKC from '../../assets/badges/aws-knowledge-compute.png'

const Badges = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWSCSAA} alt="AWS CSAA Badge"  height='100px' title="AWS Certified Solutions Architect – Associate" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CPP} alt="CPP Badge" width='100px' height='100px' title="cPanel Professional Certification"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={POA} alt="POA Badge" width='100px' height='100px' title="Plesk-Obsidian-Associate" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWSKA} alt="AWSKA Badge" height='100px' title="AWS Knowledge Architecting"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWSKCE} alt="AWSKCE Badge" width='100px' height='100px' title="AWS Knowledge Cloud Essentials"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWSEIC} alt="AWSEIC Badge" width='100px' height='100px' title="AWS Educate Introduction Cloud"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWSKC} alt="AWSKC Badge" width='100px' height='100px' title="AWS Knowledge Compute"/>
      </Col>
      
    </Row>
  );
}

export default Badges;
