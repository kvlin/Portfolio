import React from 'react';
import SkillsBrief from '../../components/SkillsBrief'
import ProjectsBrief from '../../components/ProjectsBrief'
import {Row, Col, Container} from 'react-bootstrap/'
import poGenAddProductImg from '../../images/po-generator/All-pages-screenshot.PNG'
import poGenCalculatorImg from '../../images/po-generator/Calculation-page-screenshot.PNG'
import poSampleImg from '../../images/po-generator/Sample-PDF-screenshot.PNG'
import budgetTracker1 from '../../images/budget-tracker/iphone11-screenshot-5.png'
import gymTrackImg from '../../images/gymtrack/All.PNG'

export default function Main() {
  const poGenerator = {
    title: 'Purchase Order Generator - SaaS',
    summary: "A SaaS built to automate part of my employment routine task. Upon providing the product and it's quantity, purchase order PDF's can be obtained for all raw materials within matters of seconds, significantly reducing the need for manual data entries.",
    link: 'https://github.com/kvlin/PurchaseOrder-Generator',
    anchor: 'More info',
    technologies: "the MERN stack (MongoDB, ExpressJS, React, NodeJS), Ant Design, Passport.js, Passport.js (authentication)",
    last_technology: 'Bcrypt',
    images:[ 
      {image:poGenAddProductImg, caption: "Purchase Order Generator", style:{ maxWidth:"1660px", width: "auto",height: "auto"}},
      {image:poGenCalculatorImg, style:{ maxWidth:"660px", width: "auto",height: "auto"}},
      {image:poSampleImg, style:{ maxHeight:"660px", width: "auto",height: "auto"}},
    ],

  }
  const gymTrack = {
    title: 'Gymtrack - Fitness class scheduler',
    summary: 'This gym application incorporates authentication to render different UI and UX depending on the type of user authenticated - gym instructors can create classes, and members can book the classes and leave reviews.',
    link: 'https://github.com/kvlin/gymtrack',
    anchor: 'More info',
    technologies: 'MySQL, Javascipt Handlebars, Passport.js, Bcrypt',
    last_technology: 'deployed on Heroku',
    images:[{image:gymTrackImg, caption: "Gymtrack - An app for Gym classes creation and reservation", style:{ maxWidth:"1660px", width: "auto",height: "auto"}}]
    
  }
  const travlmate = {
    title: 'Travlmate - Travel information website',
    summary: 'A one-stop-shop website for travelers to access helpful information that can aid planning for a trip. It saves users time and effort having to search across many sites for a variety of information they might need. Developed with Javascript (JQuery), Bootstrap, HTML and CSS',
    link: 'https://github.com/kvlin/Travlmate',
    anchor: 'More info'
  }
  const budgetTracker = {
    title: 'Budget Tracker - Progressive Web App',
    summary: 'The application allows users to log their withdrawals or deposits for budget tracking. It works even when the device is offline and will synchronize the data with the cloud database upon regaining connection. This is particularly useful for travellers who visit regions with spasmodic internet availability.',
    link: 'https://github.com/kvlin/Budget-Tracker',
    anchor: 'More info',
    technologies: "IndexedDB, Service Worker, Cache API",
    last_technology: 'MongoDB Atlas',
    images:[ 
      {image:budgetTracker1, caption: "Budget Tracker", style:{ maxWidth:"1660px", width: "auto",height: "auto"}}
    ],

  }
  const fitnessTracker = {
    title: 'Fitness Tracker - Keeps record of fitness progress',
    summary: 'This fitness tracker saves the input fitness data (e.g. training time, weight lifted, distance ran) provided by the user and displays them graphically for better visual tracking of their fitness progress. The application was deployed on Heroku and fetches data from MongoDB Atlas.',
    link: 'https://github.com/kvlin/Fitness-Tracker',
    anchor: 'More info'
  }

  

  return (
    <>
      <SkillsBrief/>
      <Container style={{minWidth:"53%", padding:"0px 0px"}}>
        <Row  xs ={1} lg={2}>
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{poGenerator}</ProjectsBrief>
          </Col >
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{budgetTracker}</ProjectsBrief>
          </Col >
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{gymTrack}</ProjectsBrief>
          </Col >
          {/* <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{fitnessTracker}</ProjectsBrief>
          </Col >
          <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{travlmate}</ProjectsBrief>
          </Col > */}

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
  