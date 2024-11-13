import React, { useState } from "react";
import { Col, Row, Modal, Image } from "react-bootstrap";
import AWSCSAA from '../../assets/badges/aws-csaa.png';
import AWSKA from '../../assets/badges/aws-knowledge-architecting.png';
import AWSKCE from '../../assets/badges/aws-knowledge-cloud-essentials (1).png';
import POA from '../../assets/badges/plesk-obsidian-associate.png';
import AWSEIC from '../../assets/badges/aws-educate-introduction-to-cloud-101.png';
import CPP from '../../assets/badges/cpp_badge.svg';
import AWSKC from '../../assets/badges/aws-knowledge-compute.png';
import AWSESC from '../../assets/badges/aws-educate-getting-started-with-compute.png';
import AWSESS from '../../assets/badges/aws-educate-getting-started-with-storage.png';
import LFK from '../../assets/badges/lfs158-introduction-to-kubernetes.png';

const Badges = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  const badges = [
    { src: AWSCSAA, alt: "AWS CSAA Badge", title: "AWS Certified Solutions Architect – Associate" },
    { src: LFK, alt: "LFK Badge", title: "Linux Foundation Intduction on Kubernative" },
    { src: CPP, alt: "CPP Badge", title: "cPanel Professional Certification" },
    { src: POA, alt: "POA Badge", title: "Plesk-Obsidian-Associate" },
    { src: AWSKA, alt: "AWSKA Badge", title: "AWS Knowledge Architecting" },
    { src: AWSKCE, alt: "AWSKCE Badge", title: "AWS Knowledge Cloud Essentials" },
    { src: AWSEIC, alt: "AWSEIC Badge", title: "AWS Educate Introduction Cloud" },
    { src: AWSKC, alt: "AWSKC Badge", title: "AWS Knowledge Compute" },
    { src: AWSESC, alt: "AWSESC Badge", title: "AWS Educate Getting Started with Compute" },
    { src: AWSESS, alt: "AWSESS Badge", title: "AWS Educate Getting Started with Storage" },
  ];

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {badges.map((badge, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <img
              src={badge.src}
              alt={badge.alt}
              height='100px'
              title={badge.title}
              onClick={() => handleShow(badge.src)}
              style={{ cursor: "pointer" }}
            />
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Image src={currentImage} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Badges;