import React from 'react';
import PageTitle from '../../components/PageTitle'
import {Row, Col, Container, Form} from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import "./index.css"
export default function Contact() {
  const header = "Contact"
    return (
      <>
        <PageTitle title={header}/>
        <Container>
          <Row>
          <Col xs={3}>
          {/* <button href="#" title="My LinkedIn Profile" style={{backgroundColor:"#0E76A8", color:"white", paddingLeft:"0px", marginLeft:"0px"}} className="btn btn-linkedin"><FontAwesomeIcon icon={faLinkedinIn} className="svg-linkedin" /> <span style={{paddingLeft:"10px", position: "relative", top:"-5px"}}>LinkedIn</span></button> */}
          {/* <a href="#" title="GitHub"  className="btn btn-github"><FontAwesomeIcon icon={faGithub} className="svg-github" /> <span>Git</span></a> */}
          <a href="https://github.com/kvlin"><button  title="My GitHub Profile"  className="btn-github"><FontAwesomeIcon icon={faGithub} className="svg-github" /> <span style={{ position: "relative", left: "-15px" }}> Github</span></button></a>
          <a href="https://www.linkedin.com/in/kevin-lin-lsx"><button href="www.linkedin.com/in/kevin-lin-lsx" title="My LinkedIn Profile"  className="btn-linkedin"><FontAwesomeIcon icon={faLinkedinIn} className="svg-linkedin" /> <span style={{ position: "relative", left: "-5px"}}> LinkedIn</span></button></a>
          {/* <button style={{float:"left", backgroundColor:"#24292e", color:"white", paddingLeft:"0px",marginLeft:"0px"}}>ok</button> */}
          </Col>
          <Col lg={9}>
            <p style={{fontSize:"2em", marginBottom:"0px"}}>Contact me via Email</p>
            <p>I'm usually quick to respond.</p>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Email address</strong></Form.Label>
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label><strong>Message</strong></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Message"/>
            </Form.Group>
          </Form>
          </Col>
          </Row>
        </Container>
      </>
    );
  }