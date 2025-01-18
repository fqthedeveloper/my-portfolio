import React, { useState, useEffect } from "react";
import { Col, Row, Modal, Image, Spinner, Alert } from "react-bootstrap";
import axios from 'axios';

const Badges = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('badges/');
        setBadges(response.data);
      } catch (err) {
        setError('Failed to fetch badges');
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
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
        {badges.map((badge, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <img
              src={badge.badges}
              alt={badge.title}
              height='100px'
              title={badge.title}
              onClick={() => handleShow(badge.badges)}
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