import React from "react";
import {BiCheck} from 'react-icons/bi';
import './services.css';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Research</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Prototyping</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Creativity and design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Collaboration</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Communication</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Server Architecture</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Database administration</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Scalability</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Security</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Data transformation</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;