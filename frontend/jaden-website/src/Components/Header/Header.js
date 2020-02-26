import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';



function Header() {
  return (
      <div className="box">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Jaden's Website</Navbar.Brand>
            <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
        </Navbar>
      </div>
  );
}

export default Header;
