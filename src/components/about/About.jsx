import React from "react";
import './about.css'
import {MdOutlineSchool} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src="" alt="About Image"/>
                    </div>
                </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <MdOutlineSchool className="about__icon"/>
                                <h5>Education</h5>
                                <small>Faculty of Computer Science & Engineering</small>
                            </article>
                            <article className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projects</h5>
                                <small>5 Projects Completed</small>
                            </article>
                            <article className="about__card">
                                <MdOutlineSchool className="about__icon"/>
                                <h5>Interests</h5>
                                <small>Tennis</small>
                                <br/>
                                <small>Cycling</small>
                                <br/>
                                <small>Formula 1</small>
                            </article>
                        </div>
                        <p>I am a hard-working student in my fourth year of studies and ready to start my professional career in the IT industry.
                            In my college years I grew up into an ambitious person with passion for programming and desire to grow into a successful developer in the future.
                            I am always an energetic, friendly and interactive person eager to have new experiences, meet new people and learn new skills.
                        </p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
        </section>
    )
}

export default About;