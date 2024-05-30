import React from "react";
import avatar from "../images/download (1).gif";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCoreldraw } from "react-icons/si";
import { SiGiphy } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";

const Home = () => {
    return (
        <div className="home">
            <div className="comp1">
                <h2>Welcome to My Component</h2>
                <div className="image-container">
                    <img className="avatar" src={avatar} alt="Logo" />
                </div>
                <div className="bio">
                    <h4><span><MdOutlinePhoneForwarded /></span> +234 8140849131</h4>
                    <h6><span><MdAttachEmail /></span> josephakpansunday@gmail.com</h6>
                    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}><span><FaLink /></span></a>
                    <div className="cv-card">
                        <p>Interested in my Curriculum Vitae</p>
                        <button className="download-btn ">Download CV </button>
                    </div>
                </div>
            </div>
            <div className="content">
                <p>
                    <h1>Hi, Viewer</h1>
                    Welcome to Joseph's Portfolio Empowering Ideas, Crafting
                    Solutions Hello, and welcome! I'm <span>Joseph Akpan Sunday</span>, a passionate Graphics, UI/UX, NFTs Designer, Wed Developer dedicated to Build your project to your taste. Through this
                    digital portal, I invite you to explore the culmination of my journey,
                    where creativity meets functionality and innovation drives every
                    endeavor.
                    <p>
                        Descipt: I have 2years experience in Design and also onboarding my self in development, I am opportuned to be a student
                        in the Borderless April Ciper Scholarship on Web design and development
                        to study front end and backend.
                    </p>
                </p>
                <div className="element">
                    <button className="contact-btn">View Contact Card</button>
                    <div className="span">
                        <div>
                            <span className="ain">Web3</span>/<span className="bin">Web2</span>/<span className="cin">NFTs</span>/
                            <span className="din">BlockChain</span></div><div className="subspan"><span className="ein">Graphics Design</span></div>
                    </div>
                </div>

                <div className="tech-stack">
                    <h1>My Tech Stack</h1>
                    <div className="icons">
                        <a className="subicos">
                            <FaHtml5 />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <FaCss3 />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <RiJavascriptFill />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <FaReact />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <RiTailwindCssFill />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <SiVite />
                            <h6 className="readon">Read More</h6>
                        </a>
                    </div>
                </div>
                <div className="design-stack">
                    <h1>My Design Stack</h1>
                    <div className="icons">
                        <a className="subicos">
                            < SiAdobeillustrator />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <SiCoreldraw />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <SiGiphy />
                            <h6 className="readon">Read More</h6>
                        </a>
                        <a className="subicos">
                            <DiPhotoshop />
                            <h6 className="readon">Read More</h6>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
