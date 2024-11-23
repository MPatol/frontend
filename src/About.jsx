import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; // Import a custom CSS file for additional styles

function About() {
  return (
    <Container fluid className="about-container">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
        <h1 className="display-4">About Me</h1>
          <p className="lead">
            Hello! I am a passionate Computer Science Studen with a love for creating dynamic and responsive web applications.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Who is Martin?</Card.Title>
              <Card.Text>
                My Name is Martin Cezar V. Patol, 2nd year student and I am currently pursuing a degree in Computer Science
                at Naga College Foundation Inc. I am a working student and currently working on BPO company located
                here in Nage City aas Technical Support representative for Bell.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Fun Fact</Card.Title>
              <Card.Text>
                I am prevously a Altar Server in our church Divine Mercy Parish since grade school until college,
                I am also part of a youth organization in our parish.
                Being part of this organization brings out my talent in performing infront of many people
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
