import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css'; // Import a custom CSS file for additional styles

function Home() {
  return (
    <Container fluid className="home-container">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">
            Discover amazing content, learn new things, and connect with me.
          </p>
          <Button variant="primary" size="lg" href="/about">Get Started</Button>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                A brief introduction about myself and what I do. Explore my journey and interests.
              </Card.Text>
              <Button variant="link" href="/about">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                Information about my educational background and accomplishments.
              </Card.Text>
              <Button variant="link" href="/education">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Hobbies</Card.Title>
              <Card.Text>
                A glimpse into my hobbies and interests outside of work and study.
              </Card.Text>
              <Button variant="link" href="/hobbies">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;