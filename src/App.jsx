import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        {/* Navbar with custom background color */}
        <Navbar expand="lg" style={{ backgroundColor: '#7d3c98' }}>
          <Container>
            <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold' }}>
              My Website
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/education" style={{ color: 'white' }}>
                  Education
                </Nav.Link>
                <Nav.Link as={Link} to="/hobbies" style={{ color: 'white' }}>
                  Hobbies
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;