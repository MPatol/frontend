import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Hobbies.css'; // Import a custom CSS file for additional styles if needed

function Hobbies() {
  return (
    <Container fluid className="hobbies-container">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4">My Hobbies</h1>
          <p className="lead">
            Here are some of my favorite activities and interests outside of work and school.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Dancing</Card.Title>
              <Card.Text>
                Been a dancer since grade school till college and had been part of many dance group inside and outside campus
                had been compete as well localy and perform in some school events.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Playing Music</Card.Title>
              <Card.Text>
                Listening to music always makes me calm especially when in times of stress from school and work.
                I have an old soul that's why I always listen to some classic songs from ABBA, Beggies and 80's and 90's Bands
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Riding Motorcycle</Card.Title>
              <Card.Text>
                I also love riding my Motorcycle names "Pasing" it is a classic looking bike good for city riding.
                Riding my bike always makes me feel calm when time in exaustion and if I want to clear up my mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Hobbies;
