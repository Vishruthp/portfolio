import React, { useEffect,useRef } from 'react'
import './intro.scss';
import { saveAs } from 'file-saver';
import { init } from 'ityped'
export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { showCursor: true, 
            backDelay:1500,
            strings: ['a gamer','a designer', 'a developer', 'a tester', 'an inventor' ] })
    },[])
    const saveFile = () => {
        saveAs(
           "assets/vishruthresume.pdf",
          "vishruthresume.pdf"
        );
    }
    return (
        <div className="intro">
             <img  className="profile" src="./assets/profile.png" alt=""></img>
           <div className="wrapper">
                    <h2>Hi there, I'm </h2>
                    <h1>Vishruth Patil</h1>
                    <h3><span ref={textRef}></span></h3>
                    <button className="hireme" onClick={saveFile}>resume</button>
                </div>
               
        </div>
    )
}
