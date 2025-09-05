import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='mega-footer'>
            <div className='footer-container'>

                <div className='footer-section'>
                    <h3>About us</h3>
                    <p>Loren ipsum </p>
                </div>

                <div className='footer-section'>
                    <h3>Category</h3>
                    <ul>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ul>
                </div>

                <div className='footer-section'>
                    <h3>Contact</h3>
                    <p>Email: jvsantosdonascimento@gmail.com </p>
                    <p>Phone: (+01 23) 4567-7890</p>
                </div>

                <div className='footer-section'>
                    <h3>Follow us</h3>
                    <div className='social-icons'>
                        <a href='https://facebook.com'
                           target='_blank'
                           rel='noopener noreferrer'>
                            <FaFacebookF/>
                        </a>
                        <a href='https://x.com'
                           target='_blank'
                           rel='noopener noreferrer'>
                            <FaTwitter/>
                        </a>
                        <a href='https://instagram.com'
                           target='_blank'
                           rel='noopener noreferrer'>
                            <FaInstagram/>
                        </a>
                    </div>
                </div>

                <div className='footer-section'>
                    <p>&copy; 2025 buynow.com. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;