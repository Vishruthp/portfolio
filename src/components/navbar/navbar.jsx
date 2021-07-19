import React from 'react'
import './navbar.scss';
import MailIcon from '@material-ui/icons/Mail';
export default function navbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="navtitle">
            <MailIcon/> 
                <span className="emailstyle">vishrutppatil@gmail.com</span>
            </div>
            <div className="navitem">
            <a href="#projects">Projects</a> 
            </div>
           
          
        </div>
    )
}
