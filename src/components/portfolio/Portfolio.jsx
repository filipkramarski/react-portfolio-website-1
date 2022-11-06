import React from "react";

import IMG1 from '../../assets/img2.png';
import IMG2 from '../../assets/img5.png';
import './portfolio.css';
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Rent A Bike Application',
        github: 'https://github.com/filipkramarski/Rent_A_Bike'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Physical Health Application',
        github: 'https://github.com/filipkramarski/PhysicalHealthApplication'
    },
    {
        id: 3,
        image: IMG3,
        title: 'E Shop Applicaation',
        github: 'https://github.com/filipkramarski/eShop'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Employee Management Application',
        github: 'https://github.com/filipkramarski/employee-system-api'
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