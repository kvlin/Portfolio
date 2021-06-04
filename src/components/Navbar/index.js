import React from 'react';
import {Nav, Container, Navbar} from 'react-bootstrap/'
import './index.css'
import { Squash as Hamburger } from 'hamburger-react'

export default function NavigationBar() {
    const navBrandStyle = {
        fontSize:"180%",
        fontWeight:"350",
        color:"white",
        backgroundColor: "#181414",
        padding:"0px 0px"

    };
    const navLinkStyle = {
        fontSize:"130%",
        color:"white",
        padding:"10px 10px",
        margin:"0 0.7em"
    }
    return (

        <>
            <Navbar style={{padding:"0px 0px"}} collapseOnSelect expand="lg" className="colour-nav" bg=""variant="dark">
                <Container style={{minWidth:"53%", padding:"0px 0px"}}>
                    
                <Navbar.Brand href="/"  style={navBrandStyle} >Kevin Lin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border:"none"}}>
                <Hamburger color="#ffffff"/>
                </Navbar.Toggle>
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