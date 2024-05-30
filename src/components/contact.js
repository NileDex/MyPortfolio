import React from "react";
import avatar from "../images/download (1).gif";



const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="cnt-image-container">
                <img className="cnt-avatar" src={avatar} alt="Logo" />
            </div>
            <form className="form-container">
                <div className="input">
                    <input className="" type="text" placeholder="Name" />
                </div>
                <div className="input">
                    <input className="" type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <input className="message" type="text" placeholder="message" />
                </div>

                <button className="cnt-download-btn">Submit</button>

            </form>


        </div>


    );
};

export default Contact;
