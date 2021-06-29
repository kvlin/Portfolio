import React, { useState, useEffect }from 'react';
import Card from 'react-bootstrap/card'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "./index.css"


export default function ProjectsBrief({children}) {
    // States for keen-slider: for rendering image sliders
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.details().relativeSlide)
      },
      slidesPerView: 1,
      mode: "snap",
      spacing: 50,
      centered: true,
      loop: false,
    })

    // Define left arrow for picture navigation
    function ArrowLeft(props) {
        if (children.images.length === 1) {
            return <></>
        }
        const disabeld = props.disabled ? " arrow--disabled" : ""
        return (
          <svg
            height="1100" width="1010"
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        )
      }
      // Define right arrow for picture navigation
      function ArrowRight(props) {
        if (children.images.length === 1) {
            return <></>
        }
        const disabeld = props.disabled ? " arrow--disabled" : ""
        return (
          <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        )
      }
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