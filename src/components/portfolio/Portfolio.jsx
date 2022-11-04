import React from "react";

import IMG1 from '../../assets/img2.png';
import IMG2 from '../../assets/img5.png';
import './portfolio.css';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Physical Health Application',
        github: 'https://github.com/filipkramarski/PhysicalHealthApplication'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Rent A Bike Application',
        github: 'https://github.com/filipkramarski/Rent_A_Bike'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github}) =>{
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn btn-primary" target='_blank'>Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;