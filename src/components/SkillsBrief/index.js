import React from 'react';
import {Row, Col, Container} from 'react-bootstrap/'
import ccpBadge from "../../images/AWS-certificates/aws-certified-cloud-practitioner.png"
import './index.css'

export default function SkillsBrief() {
    return (
        <div className="wrapper">
            <Container style={{minWidth:"55%"}}>
                <Row>
                    <Col md={7} >
                        <Row className="portfolio-text" >
                            Portfolio
                        </Row>
                        <br/>
                        <Row className="about-text">
                            <div>I'm a full stack developer living in Sydney,</div>
                        </Row>
                        <br/>
                        <Row className="skills-text">
                        Cloud Computing &#9679; MERN stack &#9679; Git &#9679; Responsive Design
                        </Row>
                    </Col>
                    <Col >
                        <a target="_blank" href="https://www.credly.com/badges/99e9cdda-4c2f-4e58-87d5-f38b5275f257/public_url"><img id="ccp-badge" src={ccpBadge}  alt="AWS CCP Certificate" /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
