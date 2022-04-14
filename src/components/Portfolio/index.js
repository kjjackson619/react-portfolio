import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../ProjectCard';
import pizza from '../../assets/large/portfolio/pizza.jpg';
import runbuddy from '../../assets/large/portfolio/runbuddy.jpg';
import budget from '../../assets/large/portfolio/budget.jpg';
import pinit from '../../assets/large/portfolio/pinit.jpg';
import book from '../../assets/large/portfolio/book.jpg';
import team from '../../assets/large/portfolio/team.jpg';
import shirtshop from '../../assets/large/portfolio/shirtshop.jpg';

const Project = () => {

    return (
        <Container fluid>

            <h2>Recent Creations:</h2>
            <Row>
                <Col>
                    <ProjectCard
                        img={pizza}
                        title="Project Pizza"
                        link="https://github.com/YourFunkyDad/project-pizza" />
                </Col>
                <Col>
                    <ProjectCard
                        img={pinit}
                        title="PIN IT!"
                        link="https://github.com/kjjackson619/project-02" />
                </Col>

            </Row>
            <Row>
                <Col>
                    <ProjectCard
                        img={book}
                        title="Google Book Search"
                        link="https://github.com/kjjackson619/book-search-engine" />
                </Col>


                <Col>
                    <ProjectCard
                        img={budget}
                        title="Budget Tracker"
                        link="https://github.com/kjjackson619/budget-tracker" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectCard
                        img={team}
                        title="Team Profile Generator"
                        link="https://github.com/kjjackson619/team-profile-generator" />
                </Col>
                <Col>
                    <ProjectCard
                        img={runbuddy}
                        title="Run Buddy"
                        link="https://github.com/kjjackson619/run-buddy" />
                </Col>

                <Col>
                    <ProjectCard
                        img={shirtshop}
                        title="Shirt Shop"
                        link="https://github.com/kjjackson619/project-03" />
                </Col>

            </Row>

        </Container>

    )


};

export default Project;