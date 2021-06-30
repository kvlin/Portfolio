import React, { useState, useEffect }from 'react';
import Card from 'react-bootstrap/card'
import "keen-slider/keen-slider.min.css"
import 'react-medium-image-zoom/dist/styles.css'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "./index.css"
export default function ProjectsBrief({children}) {

    return (
        <div>
            {/* Create project summary cards */}
            <Card >
            <a data-caption={children.images[0].caption}  data-fancybox="gallery" href={children.images[0].image} style={children.images[0].style}>
                <img className="zoom-in" src={children.images[0].image}  alt="Hi"></img>
            </a>
            <Card.Body>
                <Card.Title>{children.title}</Card.Title>
                <Card.Text>
                {children.summary} Developed using <strong>{children.technologies}</strong> and <strong>{children.last_technology}</strong>.
                </Card.Text>
                <Card.Text>
                <a href={children.link}>{children.anchor}</a>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}