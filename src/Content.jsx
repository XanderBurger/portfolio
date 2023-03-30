import React from 'react'
import patternSvg from "./assets/svgs/pixelPattern.svg"
import sidebarSvg from "./assets/svgs/pixelSidebar.svg"

export default function Content() {

  return (
    <div className='aboutMe' style={{color: "white"}}>
        <div className='header'> 
            <h2>Xander Burger</h2>
            <h2>About Me</h2>
        </div>
        <div className='body'>
            <h1>CREATIVE PROGRAMING & GRAPHIC DESIGN</h1>
             <img src={patternSvg} alt="Pixel Pattern"/>
            <p>
            Currently studying Graphic Design and Computer Science at Montana State University. My work if focused on the intersection between design and computation. 
            </p>
            <div className='contact'>
                <h2>CONTACT ME</h2>
                <img src={sidebarSvg} alt="small colorful sidebar"/>
                <p>
                    ee: xanderbdesign@gmail.com
                    p: (406) 890-1841
                    i: @XanderBurgerDesign
                </p>
            </div>
        </div>
    </div>
  )
}
