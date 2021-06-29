import React from 'react';
import SkillsBrief from '../../components/SkillsBrief'
import ProjectsBrief from '../../components/ProjectsBrief'
import {Row, Col, Container} from 'react-bootstrap/'
import poGenAddProductImg from '../../images/po-generator/All-pages-screenshot.PNG'
import poGenCalculatorImg from '../../images/po-generator/Calculation-page-screenshot.PNG'
import poSampleImg from '../../images/po-generator/Sample-PDF-screenshot.PNG'
import budgetTracker1 from '../../images/budget-tracker/iphone11-screenshot-5.png'

export default function Main() {
  const poGenerator = {
    title: 'Purchase Order Generator - SaaS',
    summary: 'SaaS application built to automate part of my employment routine task. The MERN (MongoDB, ExpressJS, React, NodeJS) stack was utilized in this project. For a given pharmaceutical product and quantity, the user will be able to obtain purchase orders for every single raw material within matters of seconds, minimizing the need for manual input, resulting in greater productivity.',
    link: 'https://github.com/kvlin/PurchaseOrder-Generator',
    anchor: 'More info',
    images:[ 
      {image:poGenAddProductImg, caption: "Purchase Order Generator", style:{ maxWidth:"1660px", width: "auto",height: "auto"}},
      {image:poGenCalculatorImg, style:{ maxWidth:"660px", width: "auto",height: "auto"}},
      {image:poSampleImg, style:{ maxHeight:"660px", width: "auto",height: "auto"}},
    ],

  }
  const gymTrack = {
    title: 'Gymtrack - Fitness class scheduler',
    summary: 'MySQL and Sequelize were employed for back-end data handling. This gym application incorporates authentication to render different UI and UX depending on the type of user authenticated - gym instructors can create classes, and members can book the classes and leave reviews.',
    link: 'https://github.com/kvlin/gymtrack',
    anchor: 'More info',
    
  }
  const travlmate = {
    title: 'Travlmate - Travel information website',
    summary: 'A one-stop-shop website for travelers to access helpful information that can aid planning for a trip. It saves users time and effort having to search across many sites for a variety of information they might need.',
    link: 'https://github.com/kvlin/Travlmate',
    anchor: 'More info'
  }
  const budgetTracker = {
    title: 'Budget Tracker - Progressive Web App',
    summary: 'The application allows users to log any withdrawal or deposits for budget tracking. Through incorporating Service-worker and Caching, the application works even when the device is offline and it will synchronize the data upon regaining connection. This is particularly useful when for travellers who visit remote places where internet may not be available.',
    link: 'https://github.com/kvlin/Budget-Tracker',
    anchor: 'More info',
    images:[ 
      {image:budgetTracker1, caption: "Budget Tracker", style:{ maxWidth:"1660px", width: "auto",height: "auto"}}
    ],

  }
  const fitnessTracker = {
    title: 'Fitness Tracker - Keeps record of fitness progress',
    summary: 'The application was deployed on Heroku and fetches data from MongoDB Atlas. This fitness tracker saves the input fitness data (e.g. training time, weight lifted, distance ran) provided by the user and displays them graphically for better visual tracking of their fitness progress.',
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
          {/* <Col style={{marginTop:"2em"}}>
            <ProjectsBrief>{gymTrack}</ProjectsBrief>
          </Col >
          <Col style={{marginTop:"2em"}}>
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
  