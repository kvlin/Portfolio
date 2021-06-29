import React from 'react';
import {Nav, Container, Navbar} from 'react-bootstrap/'
import './index.css'
import { Squash as Hamburger } from 'hamburger-react'
import GithubCorner from 'react-github-corner';

export default function NavigationBar() {
    const navBrandStyle = {
        fontSize:"180%",
        fontWeight:"350",
        color:"white",
        backgroundColor: "#181414",
        padding:"0px 0px", 
        marginTop:"4px"

    };
    const navLinkStyle = {
        fontSize:"101%",
        color:"white",
        padding:"15px 20px",
        margin:"0 0.7em",
        height:"3.3em"
    }
    return (

        <>
        <GithubCorner href="https://github.com/kvlin" className="github-centre" title="View my GitHub profile" direction="left" ariaLabel="View My Github" size="64"/>
            <Navbar style={{padding:"0px"}} collapseOnSelect expand="lg" className="colour-nav" bg=""variant="dark">
            <GithubCorner href="https://github.com/kvlin" className="github-corner"  title="View my GitHub profile" bannerColor="white" octoColor="black" size="52" direction="right"/>
                <Container style={{minWidth:"53%", padding:"0px"}}>
                <Navbar.Brand href="/"  style={navBrandStyle} >Kevin Lin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border:"none"}}>
                <Hamburger color="#ffffff"/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="ml-auto" style={{marginRight: '0' }} >
                    <Nav.Link href="/"  style={navLinkStyle}>Portfolio</Nav.Link>
                    
                    <Nav.Link href="/cv"  style={navLinkStyle}>Curriculum Vitae</Nav.Link>
                    <Nav.Link href="/contact"  style={navLinkStyle}>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                
                </Container>
            </Navbar>

        </>
    )
}