import React from 'react';
import {Row, Col, Container} from 'react-bootstrap/'
import './index.css'

export default function SkillsBrief() {
    return (
        <div className="wrapper">
            <Container style={{minWidth:"55%"}}>
                <Row className="portfolio-text" >
                    Portfolio
                </Row>
                <br/>
                <Row className="about-text">
                    <span>I'm a full stack developer living in Sydney. <strong>I love programming!</strong></span>
                </Row>
                <br/>
                <Row className="skills-text">
                 MongoDB &#9679; ExpressJS &#9679; ReactJS &#9679; NodeJS &#9679; MySQL &#9679; RESTful API &#9679; Git &#9679; Responsive Design
                </Row>
            </Container>
        </div>
    )
}
