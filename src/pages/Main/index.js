import React from 'react';
import SkillsBrief from '../../components/SkillsBrief'
import ProjectsBrief from '../../components/ProjectsBrief'
import {Row, Col, Container} from 'react-bootstrap/'

export default function Main() {
  const poGenerator = {
    title: 'Purchase Order Generator',
    summary: 'SaaS application built to automater part of my employment routine task. MERN stack was utilizied in this project. The ultimate goal was to minimize the need for user input for greater productivity at work.',
    link: 'https://github.com/kvlin/PurchaseOrder-Generator',
    anchor: 'More info'
  }
  const gymTrack = {
    title: 'Gymtrack - Fitness scheduling application',
    summary: 'A gym application that facilitates creating and scheduling classes for gym instructors and members respectively. The interface and functionalities varies depending on the type of user logged in.',
    link: 'https://github.com/kvlin/gymtrack',
    anchor: 'More info'
  }
  const travlmate = {
    title: 'Travlmate - Travel information website',
    summary: 'A one-stop-shop website for travelers to access helpful information that can aid planning for a trip. It saves users time and effort having to search across many sites for a variety of information they might need.',
    link: 'https://github.com/kvlin/Travlmate',
    anchor: 'More info'
  }
  

  return (
    <>
      <SkillsBrief/>
      <Container style={{minWidth:"53%", padding:"0px 0px"}}>
        <Row  xs ={1} xl={2}>
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{poGenerator}</ProjectsBrief>
          </Col >
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{gymTrack}</ProjectsBrief>
          </Col >
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{travlmate}</ProjectsBrief>
          </Col >
          {/* <Col style={{marginTop:"2em"}}>
            <ProjectsBrief/>
          </Col>
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief/>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
  