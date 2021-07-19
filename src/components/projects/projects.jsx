import React from 'react'
import './projects.scss';
export default function projects() {
    return (
        <div className="projects" id="projects">
            <h1 className="title">Projects</h1>
            <div className="projectss">
                <figure className="snip1482">
                    <figcaption>
                        <h2>Recipe App</h2>
                        <p>A food recipe app with flutter front end and microservices as backend</p>
                    </figcaption>
                    <img src="./assets/bois.png" alt="sample45" />
                </figure>
                <figure className="snip1482">
                    <figcaption>
                        <h2>Fitness Tracker (ongoing)</h2>
                        <p>Fitness Tracker app which syncs with google fit and utilize the data with some machine learning models for better health prediction</p>
                    </figcaption>
                   <img src="./assets/healthapp.png" alt="sample45" />
                </figure>
                <figure className="snip1482">
                    <figcaption>
                        <h2>Automated System (ongoing)</h2>
                        <p>Automated system for home which tracks energy consumption and gives control to different devices, alexa integrated</p>
                    </figcaption>
                    <img src="./assets/automation.png" alt="sample45" />
                </figure>
            </div>



        </div>
    )
}