

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
function CustomNavbar() {


    const [expanded, setExpanded] = useState(false);
    const toggleNavbar = () => setExpanded(!expanded);
 
    return (
      <Navbar bg="light" expand="lg" expanded={expanded} >
        <Container>
          <Navbar.Brand href="#">
            
            </Navbar.Brand>
          <Navbar.Toggle onClick={toggleNavbar} aria-controls="navbar"  />
          <Navbar.Collapse id="navbar" className='justify-content-end'>
            <Nav className="ml-auto">
              <Nav.Link  className='mx-4'>Home</Nav.Link>
              <Nav.Link className=' mx-4'>Services</Nav.Link>
              <Nav.Link className=' mx-4'>Projects</Nav.Link>
              <Nav.Link className=' mx-4'>About Us</Nav.Link>
              <Nav.Link className=' mx-4' >Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default CustomNavbar;