import React from 'react';
import {Row, Col, Container} from 'react-bootstrap/'

export default function PageHeader({title}) {
    return (
        <Container style={{minWidth:"55%"}}>
        <Row style={{fontSize:"2em", fontWeight:"300", padding:"15px 0px 0px 15px"}}>
           <span>{title}</span>
        </Row>
        <hr />
        </Container>
    );
  }