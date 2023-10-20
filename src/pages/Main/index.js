import React from 'react';
import ProjectsBrief from '../../components/ProjectsBrief'
import SkillsBrief from '../../components/SkillsBrief';
import { Row, Col, Container } from 'react-bootstrap/'
import poGenAllImg from '../../images/po-generator/Calculation-page-screenshot.PNG'
import budgetTrackerAllImg from '../../images/budget-tracker/desktop-screenshot.png'
import gymtrackAllImg from '../../images/gymtrack/classes.png'
import fitrackAllImg from '../../images/fitrack/Home-Stats-pg.PNG'
import dessertAllImg from '../../images/dessert/readme-home.png'
export default function Main() {
  // Below data objects for every projects to be displayed on the portfolio page
  const poGenerator = {
    title: 'Purchase Order Generator - SaaS',
    summary: "A SaaS built to automate part of my employment routine task. Upon providing the product and it's quantity, purchase order PDF's can be obtained for all raw materials within matters of seconds, significantly reducing the need for manual data entries.",
    link: 'https://github.com/kvlin/PurchaseOrder-Generator',
    anchor: 'More info',
    technologies: "the MERN stack, Passport.js",
    last_technology: 'Bcrypt',
    images: [
      { image: poGenAllImg, caption: "Purchase Order Generator", style: { maxWidth: "1660px", width: "auto", minHeight: "0.5vh" } },
    ],

  }
  const gymTrack = {
    title: 'Gymtrack - Fitness class scheduler',
    summary: 'This gym application incorporates authentication to render different UI and UX depending on the type of user authenticated - gym instructors can create classes, and members can book the classes and leave reviews.',
    link: 'https://github.com/kvlin/gymtrack',
    anchor: 'More info',
    technologies: 'Node.js, Express, MySQL, JQuery, Handlebars, Passport.js',
    last_technology: 'Bcrypt',
    images: [{ image: gymtrackAllImg, caption: "Gymtrack - An app for Gym classes creation and reservation", style: { maxWidth: "1660px", width: "auto", height: "auto" } }]

  }
  const budgetTracker = {
    title: 'Budget Tracker - Progressive Web App',
    summary: 'The application allows users to log their withdrawals or deposits for budget tracking. It works even when the device is offline and will synchronize the data with the cloud database upon regaining connection. This is particularly useful for travellers who visit regions with spasmodic internet availability.',
    link: 'https://github.com/kvlin/Budget-Tracker',
    anchor: 'More info',
    technologies: "IndexedDB, Service Worker, Cache API, Bootstrap",
    last_technology: 'MongoDB Atlas',
    images: [
      { image: budgetTrackerAllImg, caption: "Budget Tracker", style: { maxWidth: "1660px", width: "auto", height: "auto" } }
    ],

  }
  const fitnessTracker = {
    title: 'LookingFit - Keeps record of fitness progress',
    summary: 'This fitness tracker saves the input fitness data (e.g. training time, weight lifted, distance ran) by the user and displays them graphically for better visual tracking of their fitness progresses.',
    link: 'https://github.com/kvlin/Fitness-Tracker',
    anchor: 'More info',
    technologies: "Node.js, MongoDB, Mongoose, Javascript, JQuery, HTML, CSS, Bootstrap, Chart.js",
    last_technology: 'deployed on Heroku',
    images: [
      { image: fitrackAllImg, caption: "Budget Tracker", style: { maxWidth: "1660px", width: "auto", height: "auto" } }
    ]
  }

  const dessertShop = {
    title: 'Kv-Dessert-Studio - An e-commerce platform',
    summary: 'This is an e-commerce application that provides an e-commerce application that providesrestaurant and dessert owners with an online presence and allows visitors to make purchases online.',
    link: 'https://github.com/kvlin/kv-dessert-site',
    anchor: 'More info',
    technologies: "AWS, NGINX, MERN stack, Passport.js(authentication)",
    last_technology: 'deployed on AWS',
    images: [
      { image: dessertAllImg, caption: "Kv-Dessert-Studio", style: { maxWidth: "1660px", width: "auto", height: "auto" } }
    ]
  }



  return (
    <>
      <SkillsBrief />
      <Container style={{ minWidth: "53%", padding: "0px 0px" }}>
        <Row xs={1} lg={2}>
          <Col style={{ marginTop: "2em" }}>
            <ProjectsBrief>{dessertShop}</ProjectsBrief>
          </Col >
          <Col style={{ marginTop: "2em" }}>
            <ProjectsBrief>{poGenerator}</ProjectsBrief>
          </Col >
          <Col style={{ marginTop: "2em" }}>
            <ProjectsBrief>{fitnessTracker}</ProjectsBrief>
          </Col >
          <Col style={{ marginTop: "2em" }}>
            <ProjectsBrief>{gymTrack}</ProjectsBrief>
          </Col >
          <Col style={{ marginTop: "2em" }}>
            <ProjectsBrief>{budgetTracker}</ProjectsBrief>
          </Col >

        </Row>
      </Container>
    </>
  );
}
