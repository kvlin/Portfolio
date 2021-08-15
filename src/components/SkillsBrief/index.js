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
                    <div>I'm a full stack developer living in Sydney,</div>
                    <div> recently qualified as an AWS Certified Cloud Practitioner</div>
                </Row>
                <br/>
                <Row className="skills-text">
                Cloud Computing &#9679; ReactJS &#9679; MongoDB &#9679; ExpressJS &#9679;  NodeJS &#9679; Git &#9679; Responsive Design
                </Row>
            </Container>
        </div>
    )
}
