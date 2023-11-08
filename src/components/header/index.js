

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../images/logo.svg'
import "../style/style.css"
function Header() {


    const [expanded, setExpanded] = useState(false);
    const toggleNavbar = () => setExpanded(!expanded);
 
    return (
      <Navbar bg="light" expand="lg" expanded={expanded} >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt='quickActionImage' width="260" height="70" />
            </Navbar.Brand>
          <Navbar.Toggle onClick={toggleNavbar} aria-controls="navbar"  />
          <Navbar.Collapse id="navbar" className='justify-content-end'>
            <Nav className="ml-auto">
              <Nav.Link  className='mx-4' href='/'>Home</Nav.Link>
              <Nav.Link className=' mx-4' href='/services'>Services</Nav.Link>
              <Nav.Link className=' mx-4' href='/projects'>Projects</Nav.Link>
              <Nav.Link className=' mx-4' href='/about'>About Us</Nav.Link>
              <Nav.Link className=' mx-4' href='/contact' >Contact Us</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;