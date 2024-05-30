import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-component'>
                <div className='component-one'>
                    <p>Follow me on Social Media</p>
                    <div className='component-icons'>
                    <ul>
                        <li>
                        <FaFacebook />
                        </li>
                        <li>
                        <FaXTwitter />
                        </li>
                        <li>
                        <FaSquareInstagram />
                        </li>
                        <li>
                        <FaLinkedin />
                        </li>
                        <li>
                        <FaTelegram />

                        </li>

                    </ul>
                    </div>
                </div>

                <div className='build'>CopyRight. Produced by Joseph Sunday<span>2024</span></div>

            </div>
        </div>
    )
}

export default Footer;
