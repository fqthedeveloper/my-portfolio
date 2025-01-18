import React, { useState, useEffect } from "react";
import { Col, Row, Modal, Image, Spinner, Alert } from "react-bootstrap";
import axios from 'axios';

const Certifications = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  useEffect(() => {
    const fetchcertifications = async () => {
      try {
        const response = await axios.get('certifications/');
        setCertifications(response.data);
      } catch (err) {
        setError('Failed to fetch certifications');
      } finally {
        setLoading(false);
      }
    };

    fetchcertifications();
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {certifications.map((badge, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <img
              src={badge.certifications}
              alt={badge.title}
              height='100px'
              title={badge.title}
              onClick={() => handleShow(badge.certifications)}
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

export default Certifications;