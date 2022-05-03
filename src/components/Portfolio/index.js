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
                <div>
                    <ProjectCard
                        img={pizza}
                        title="Project Pizza"
                        link="https://github.com/YourFunkyDad/project-pizza" />
                </div>


                <ProjectCard
                    img={pinit}
                    title="PIN IT!"
                    link="https://github.com/kjjackson619/project-02" />




                <ProjectCard
                    img={book}
                    title="Google Book Search"
                    link="https://github.com/kjjackson619/book-search-engine" />




                <ProjectCard
                    img={budget}
                    title="Budget Tracker"
                    link="https://github.com/kjjackson619/budget-tracker" />



                <ProjectCard
                    img={team}
                    title="Team Profile Generator"
                    link="https://github.com/kjjackson619/team-profile-generator" />

                <ProjectCard
                    img={runbuddy}
                    title="Run Buddy"
                    link="https://github.com/kjjackson619/run-buddy" />

                <ProjectCard
                    img={shirtshop}
                    title="Shirt Shop"
                    link="https://github.com/kjjackson619/project-03" />


            </Row>

        </Container>

    )


};

export default Project;