import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'; // Import a custom CSS file for additional styles

function Contact() {
  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4">Contact Me</h1>
          <p className="lead">
            Feel free to reach out to me using the contact information below.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <h5>Email</h5>
          <p>mcpatol@gbox.ncf.edu.ph</p>

          <h5>Phone</h5>
          <p>(+63) 921 217 8424</p>

          <h5>Location</h5>
          <p>Naga City Camarines Sur, Philippines </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
