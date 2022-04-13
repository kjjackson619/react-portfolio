import React from "react";
import { Button, Card } from "react-bootstrap";

function ProjectCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.img} alt="project" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>


                <Button className='card-button' href={props.link} target="_blank">
                    Git Link!
                </Button>

            </Card.Body>
        </Card>
    );
}
export default ProjectCard;