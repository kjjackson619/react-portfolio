import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-5">
            <h2 id="about">Who am I?</h2>
            <img src={coverImage} className="my-2" style={{ width: '98%' }} alt="cover" />
            <div className="my-2">
                <p>
                    Hello, welcome to my portfolio! I am a former graduate from Ohio State University, from which I received a Bachelors Degree of Arts in Sociology.
                    I currently work in the Logistics industry, where I grew a desire to work with technology.
                    I have just recently finished my endeavor of going back to OSU, in which I am now also a graduate in Full Stack and MERN web development.
                    I am excited to extend my array of proficiencies, as well as further my professional career and development within the industry! Check out some of my work, as well as the link to my professional resume.
                    Also, be sure to give me a follow via the links to Github and LinkedIn below!
                </p>
            </div>
        </section>
    );
}

export default About;