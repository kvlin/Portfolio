import React, {useState} from 'react';
import PageTitle from '../../components/PageTitle'
import {Row, Col, Container, Form, Button, Alert} from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import "./index.css"
import emailjs from 'emailjs-com';


export default function Contact() {
  const [showSuccessAlert, setshowSuccessAlert] = useState(false);
  const [showSendingAlert, setshowSendingAlert] = useState(false);

  const header = "Contact"

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm('service_kevlin129', 'template_d70f1id', e.target, 'user_BFysjDOuTvMX4iOqdFMCC')
      .then((result) => {
        setshowSendingAlert(false)
        setshowSuccessAlert(true)
        setTimeout(function(){setshowSuccessAlert(false)}, 4000)
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
      <>
        <PageTitle title={header}/>
        {showSuccessAlert? 
        <Alert transition="true" id="email-success" variant="success" onClose={() => setshowSuccessAlert(false)} dismissible closeLabel="Close alert">
          Successfully sent - I will reply soon!
        </Alert> : showSendingAlert ? 
        <Alert transition="true" id="email-sending" variant="info" onClose={() => setshowSuccessAlert(false)} dismissible closeLabel="Close alert">
          Sending Email...
        </Alert> :<></>
        }
        <Container>
          <Row>
          <Col xs={3}>
          {/* <button href="#" title="My LinkedIn Profile" style={{backgroundColor:"#0E76A8", color:"white", paddingLeft:"0px", marginLeft:"0px"}} className="btn btn-linkedin"><FontAwesomeIcon icon={faLinkedinIn} className="svg-linkedin" /> <span style={{paddingLeft:"10px", position: "relative", top:"-5px"}}>LinkedIn</span></button> */}
          {/* <a href="#" title="GitHub"  className="btn btn-github"><FontAwesomeIcon icon={faGithub} className="svg-github" /> <span>Git</span></a> */}
          <a href="https://github.com/kvlin"><button  title="My GitHub Profile"  className="btn-github"><FontAwesomeIcon icon={faGithub} className="svg-github" /> <span style={{ position: "relative", left: "-15px" }}> Github</span></button></a>
          {/* <a href="https://www.linkedin.com/in/kevin-lin-lsx"><button href="www.linkedin.com/in/kevin-lin-lsx" title="My LinkedIn Profile"  className="btn-linkedin"><FontAwesomeIcon icon={faLinkedinIn} className="svg-linkedin" /> <span style={{ position: "relative", left: "-5px"}}> LinkedIn</span></button></a> */}
          {/* <button style={{float:"left", backgroundColor:"#24292e", color:"white", paddingLeft:"0px",marginLeft:"0px"}}>ok</button> */}
          </Col>
          <Col lg={9}>
            <p style={{fontSize:"2em", marginBottom:"0px"}}>Contact me via Email</p>
            <p>I'm usually quick to respond.</p>
            <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><strong>Your Email address</strong></Form.Label>
              <Form.Control type="email" name="from_email" placeholder="Email address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label><strong>Message</strong></Form.Label>
              <Form.Control as="textarea" name="from_email" rows={3} placeholder="Message"/>
            </Form.Group>
            <Button id="contact-submit-btn" onClick= {() => setshowSendingAlert(true)} type="submit" className="btn btn-primary">Send</Button>
          </Form>
          </Col>
          </Row>
        </Container>
      </>
    );
  }