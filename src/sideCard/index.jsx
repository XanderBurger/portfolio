import React, { useState } from 'react'
import {useSpring, animated} from "react-spring"
import "./index.css"

export default function Card({color, show, setIsShow, handleShow, i, content, tile, titleColor}) {
    


    const[showContent, setShowContent] = useState(false)


    const animatedDiv = useSpring({
        width: show ? "82%": "4.5%",
        backgroundColor: color,
        zIndex: show ? 1: -1,
        onRest: () => setShowContent(!showContent)
    })

    const animatedH2 = useSpring({
        opacity: show ? 0: 100,
        fontSize: 15,
        paddingTop: 63,
        lineHeight: 2.5,
        fontWeight: 900,
        color: titleColor
    })

    return (
        <animated.div className='card' style={animatedDiv} onClick={() => (setIsShow(handleShow(i)))}>
            <animated.h2 className='title' style={animatedH2}>{tile}</animated.h2>
            {show && content}   
        </animated.div>
    )
}
