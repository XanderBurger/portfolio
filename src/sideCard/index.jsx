import React, { useState, useEffect } from 'react'
import {useSpring, animated} from "react-spring"
import Arrow from './arrow'
import "./index.css"

export default function Card({color, show, setIsShow, handleShow, i, content, tile, titleColor}) {
    
    const[showContent, setShowContent] = useState(show)

    const arrow = <Arrow setIsShow = {setIsShow} handleShow ={handleShow} i={i}/>

    const breakpoint = 800
    const [screenSize, setScreenSize] = useState(window.innerWidth);

     // Event listener to update screen size state when window is resized
    const handleResize = () => {
        setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener to window resize event
        window.addEventListener('resize', handleResize);
        // Remove event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleDivScreenSizeStyle(screenSize){
        if(screenSize > breakpoint){
            return{
                width: show ? "88%": "3%",
                backgroundColor: color,
                onRest: () => setShowContent(show ? true: false)
            }
        }else{
            return{
                width: show ? "100%": "0%",
                backgroundColor: color,
                onRest: () => setShowContent(show ? true: false)
            }
        }
    }

    function handleH2ScreenSizeStyle(screenSize){
        if(screenSize > breakpoint){
            return{
                opacity: show ? 0: 100,
                color: titleColor
            }
        }else{
            return{
                opacity: 0,
                color: titleColor
            }
        }
    }
    
    const animatedDiv = useSpring(handleDivScreenSizeStyle(screenSize))
    
    const animatedH2 = useSpring(handleH2ScreenSizeStyle(screenSize))


    return (
        <>
        <animated.div className='card' style={animatedDiv} onClick={() => (setIsShow(handleShow(i)))}>
            <animated.h2 className='cardTitle' style={animatedH2} >{tile}</animated.h2>
            {showContent && show && content} 
        </animated.div>
        {(screenSize < breakpoint) && show && arrow}
        </>
    )
}
