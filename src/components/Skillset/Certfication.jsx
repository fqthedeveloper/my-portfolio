import React, { useState } from "react";
import { Col, Row, Modal, Image } from "react-bootstrap";
import AWSSAA from '../../assets/certfications/AWS Solution.png';
import SIWD from '../../assets/certfications/Skill India.png';
import CPENEL from '../../assets/certfications/Cpenel.png';
import DEll from '../../assets/certfications/DELL_Certificate_page-0001.jpg';
import LINUX158 from '../../assets/certfications/Linux Foundation 158.png';
import LINUX151 from '../../assets/certfications/Linux Foundation 151.png';
import POAC from '../../assets/certfications/certification-Plesk-Obsidian-Associate-Certification-fqthedeveloper_page-0001.jpg';
import NSDCCIO from '../../assets/certfications/Faizan Qureshi_5E4LWVWR-1_page-0001.jpg';
import NSDWE from '../../assets/certfications/Faizan Qureshi_WHJCUSKV-1_page-0001.jpg';
import NSDAC from '../../assets/certfications/Faizan Qureshi_XNICPB8Z-1_page-0001.jpg';
import AWSCE from '../../assets/certfications/AWS Cloud Essental.png';
import AESDEVOPS from '../../assets/certfications/AWS Devops.png';
import AZUREC from '../../assets/certfications/AZURE Cloud.png';

function Certfication() {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  const certifications = [
    { src: SIWD, alt: "Skill India Web Development" },
    { src: DEll, alt: "DELL Web Development Certificate" },
    { src: AWSSAA, alt: "AWS Certified Solutions Architect" },
    { src: CPENEL, alt: "cPanel Professional Certification" },
    { src: POAC, alt: "Plesk Obsidian Associate" },
    { src: NSDAC, alt: "NSD AC" },
    { src: NSDWE, alt: "NSD Work Ethics" },
    { src: NSDCCIO, alt: "NSD CCIO Officer" },
    { src: AWSCE, alt: "AWS Essential Cloud" },
    { src: AESDEVOPS, alt: "AWS Getting Started with DEVOPS" },
    { src: AZUREC, alt: "Azure Describe Cloud Computing" },
    { src: LINUX158, alt: "Linux Foundation 158 Certification" },
    { src: LINUX151, alt: "Linux Foundation 151 Certification" },
  ];

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {certifications.map((cert, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <img
              src={cert.src}
              alt={cert.alt}
              height="100px"
              title={cert.alt}
              onClick={() => handleShow(cert.src)}
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

export default Certfication;