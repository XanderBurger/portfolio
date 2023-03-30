import React, { useState } from 'react'
import {useSpring, animated} from "react-spring"

export default function Card({color, show, content, tile}) {
    
    const animatedDiv = useSpring({
        width: show ? "82%": "4.5%",
        backgroundColor: color
    })

    const animatedH2= useSpring({
        fontSize: 15,
        paddingTop: 63,
        lineHeight: 2.5,
        fontWeight: 900
    })

    return (
        <animated.div className='card' style={animatedDiv} >
            <animated.h2 className='title' style={animatedH2}>Project Name</animated.h2>
        </animated.div>
    )
}
  