import React from 'react';
import Card from 'react-bootstrap/card'
import examplePic from '../../images/Add-product-page-screenshot.PNG'
export default function ProjectsBrief() {
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={examplePic}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}