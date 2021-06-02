import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './index.css'

export default function NavigationBar() {
    const navBrandStyle = {
        fontSize:"220%",
        color:"white",

    };
    const navLinkStyle = {
        fontSize:"150%",
        color:"white",
        margin:"0 0.7em"
    }
    return (

        <>
            <Navbar collapseOnSelect expand="lg" className="colour-nav" bg=""variant="dark">
                <Container>
                <Navbar.Brand href="/"  style={navBrandStyle} >Kevin Lin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{marginRight: '0' }} >
                    <Nav.Link href="/"  style={navLinkStyle}>Portfolio</Nav.Link>
                    <Nav.Link href="/resume"  style={navLinkStyle}>Resume</Nav.Link>
                    <Nav.Link href="/contact"  style={navLinkStyle}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}