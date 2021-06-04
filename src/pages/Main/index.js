import React from 'react';
import SkillsBrief from '../../components/SkillsBrief'
import ProjectsBrief from '../../components/ProjectsBrief'
import {Row, Col, Container} from 'react-bootstrap/'

export default function Main() {
  return (
    <>
      <SkillsBrief/>
      <Container style={{minWidth:"53%", padding:"0px 0px"}}>
        <Row  xs ={1} xl={2}>
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief/>
          </Col >
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief/>
          </Col>
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
  