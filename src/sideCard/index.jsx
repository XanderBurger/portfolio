import React, { useState } from 'react'
import {useSpring, animated} from "react-spring"
import "./index.css"

export default function Card({color, show, setIsShow, handleShow, i, content, tile, titleColor}) {
    
    const[showContent, setShowContent] = useState(false)

    const animatedDiv = useSpring({
      //  config: {tension: 180, friction: 23},
        width: show ? "88%": "3%",
        backgroundColor: color,
       // borderColor: color,
        onRest: () => setShowContent(!showContent)
    })

    const animatedH2 = useSpring({
        fontWeight: show ? 900: 300,
        color: titleColor
    })

    const animatedSubHead = useSpring({
        config: {duration: 0},
        opacity: show ? 100: 0,
        color: titleColor
    })

    return (
        <animated.div className='card' style={animatedDiv} onClick={() => (setIsShow(handleShow(i)))}>
            <animated.h2 className='title' style={animatedH2}>{tile}</animated.h2>
            <animated.h2 className='fixedHeader' style= {animatedSubHead}>XANDER BURGER<br/>GRAPHIC DESIGN–PROGRAMING</animated.h2>
            {show && content}   
        </animated.div>
    )
}
