import React from 'react';
import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact" id="contact">          
            <div className="footer">
            <p style={{color:'white'}}>My Social Networks</p>
            <a href="https://stackoverflow.com/users/6799753/vishrut-patil" target="_blank" rel="noreferrer">
                <img src="assets/stackoverflow.svg" alt=""></img>
                    </a> 
                    <a href="https://www.linkedin.com/in/vishruth-patil-55962ab6" target="_blank" rel="noreferrer">
                <img src="assets/linkedin.svg" alt=""></img>
                    </a> 
                    
                    <a href="https://github.com/Vishruthp" target="_blank" rel="noreferrer">
                <img src="assets/github.svg" alt=""></img>
                    </a> 
                    <a href="https://twitter.com/vishruthpatil" target="_blank" rel="noreferrer">
                <img src="assets/twitter.svg" alt=""></img>
                    </a> 
                    <a href="https://www.instagram.com/vishruthpatil" target="_blank" rel="noreferrer">
                <img src="assets/instagram.svg" alt=""></img>
                    </a> 
                </div>
        </div>
    )
}
