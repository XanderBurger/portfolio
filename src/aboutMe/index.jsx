import React from 'react'
import "./index.css"
import Sketch from '../flowerP5/Sketch'
import Header from '../bodyComponets/header'

export default function AboutMe() {
  const black = "#232121"

  return (
    <>
    <div className='aboutMe' style={{color: black}}>
      <Header className="head" title="About Me" subhead="(click to grow)"/>
      <div className='body'>
      <div className='sketchContainer'>
          <Sketch className="sketch" backgroundColor = {"#FAE4C4"} frameRate = {15}/>
      </div>
          <p className="aboutText">
          Currently studying Graphic Design and Computer Science at Montana State University. My work is focused on the intersection between design and code. 
          </p>
          <a className='sketchLink' href="https://editor.p5js.org/XanderBurger/sketches/w5qt_34wg" target="_blank"><p>about this algorithm</p></a>
          <div className='contact'>
              <h2 className='contactHeader'>CONTACT ME</h2>
              <p className='contactText'>
                    xanderbdesign@gmail.com
                  <br/> (406) 890-1841
              </p>
          </div>
          
      </div>
    </div>
    <div style={{height: "150px"}}></div>
    </>
  )
}
