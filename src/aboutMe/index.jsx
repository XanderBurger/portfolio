import React from 'react'
import patternSvg from "./assets/svgs/pixelPattern.svg"
import sidebarSvg from "./assets/svgs/pixelSidebar.svg"
import "./index.css"

export default function AboutMe() {

  return (
    <div className='aboutMe' style={{color: "white"}}>
        <div className='header'> 
            <h2 className='left'>Xander Burger</h2>
            <h2 className='right'>About Me</h2>
        </div>
        <div className='body'>
            <h1 className='tagLine'>GRAPHIC DESIGN<br/>& CREATIVE PROGRAMING</h1>
            <img className="svg" src={patternSvg} alt="Pixel Pattern"/>
            <p className="aboutText">
            Currently studying Graphic Design and Computer Science at Montana State University. My work if focused on the intersection between design and code. 
            </p>
            <div className='contact'>
                <h2 className='contactHeader'>CONTACT ME</h2>
                <img src={sidebarSvg} className="contactSvg" alt="small colorful sidebar"/>
                <p className='contactText'>
                    <b>e:</b> xanderbdesign@gmail.com
                    <br/><b>p:</b> (406) 890-1841
                    <br/><b>i:</b> @XanderBurgerDesign
                </p>
            </div>
        </div>
    </div>
  )
}
