import React from 'react';
import Card from 'react-bootstrap/card'
import examplePic from '../../images/Add-product-page-screenshot.PNG'
export default function ProjectsBrief({children}) {
    
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={examplePic}/>
            <Card.Body>
                <Card.Title>{children.title}</Card.Title>
                <Card.Text>
                {children.summary}
                </Card.Text>
                <Card.Text>
                <a href={children.link}>{children.anchor}</a>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}