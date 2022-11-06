import React from "react";
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {GrLinkedinOption} from 'react-icons/gr';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/filip.kramarski.9"><FaFacebookF /></a>
                <a href="https://github.com/filipkramarski"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/filip-kramarski-3117181a6/"><GrLinkedinOption /></a>
            </div>
        </footer>
    )
}

export default Footer;