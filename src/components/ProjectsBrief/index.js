import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import "keen-slider/keen-slider.min.css"
import 'react-medium-image-zoom/dist/styles.css'
import "./index.css"
import ImageViewer from "react-simple-image-viewer";
export default function ProjectsBrief({ children }) {
    const [currentImage, setCurrentImage] = useState("");
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = (url) => {
        setCurrentImage([url]);
        setIsViewerOpen(true);
    };

    const closeImageViewer = () => {
        setCurrentImage("");
        setIsViewerOpen(false);
    };
    return (
        <div className='projectContainer'>
            <Card className='projectContent'>
                <Card.Title className="summaryTitle" >{children.title}</Card.Title>
                <a data-caption={children.images[0].caption} data-fancybox="gallery" style={children.images[0].style}>
                    <img className="zoom-in" onClick={() => openImageViewer(children.images[0].image)} src={children.images[0].image} ></img>
                </a>
                <Card.Body className="summaryContainer">

                    <Card.Text >
                        {children.summary} Developed using <strong>{children.technologies}</strong> and <strong>{children.last_technology}</strong>.
                    </Card.Text>
                    <div >
                        <form target="_blank" className="gallery-btn-section">
                            <button className="githubUrlBtn" type="submit" formAction={children.glink}>More details</button>
                            <button className="appUrlBtn" type="submit" formAction={children.alink}>Try now!</button>
                        </form>
                    </div>
                </Card.Body>
            </Card>
            {isViewerOpen && (
                <ImageViewer
                    src={currentImage}
                    currentIndex={0}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.6)"
                    }}
                    closeOnClickOutside={true}
                />
            )}
        </div>
    )
}