import React from 'react'
import patternSvg from "./assets/svgs/pixelPattern.svg"
import sidebarSvg from "./assets/svgs/pixelSidebar.svg"
import "./index.css"

export default function AboutMe() {

    const black = "#232121"

  return (
    <div className='aboutMe' style={{color: black}}>
        <div className='header'>
        </div>
        <div className='body'>
            <p className="aboutText">
            Currently studying Graphic Design and Computer Science at Montana State University. My work if focused on the intersection between design and code. 
            </p>
            <div className='contact'>
                <h2 className='contactHeader'>CONTACT ME</h2>
                {/* <img src={sidebarSvg} className="contactSvg" alt="small colorful sidebar"/> */}
                <p className='contactText'>
                     xanderbdesign@gmail.com
                    <br/> (406) 890-1841
                    <br/> @XanderBurgerDesign
                </p>
            </div>
        </div>
    </div>
  )
}
