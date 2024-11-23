import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Education.css'; // Import a custom CSS file for additional styles if needed

function Education() {
  return (
    <Container fluid className="education-container">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4">My Education</h1>
          <p className="lead">
            Here is a summary of my educational journey.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Elementary Education</Card.Title>
              <Card.Text>
                <strong>Calabanga Central Division Pilot School</strong><br />
                Graduated: 2009<br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Secondary Education</Card.Title>
              <Card.Text>
                <strong>Calabanga National High School</strong><br />
                Graduated: 2013<br />
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Tertiary Education</Card.Title>
              <Card.Text>
                <strong>Naga College Foundation Inc.</strong><br />
                Course: Bachelor of Science and Computer Science
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
