import React, { useState, useEffect } from 'react'
import {useSpring, animated} from "react-spring"
import Arrow from './arrow'
import "./index.css"

export default function Card({color, show, setIsShow, handleShow, i, content, tile, titleColor}) {
    
    const[showContent, setShowContent] = useState(false)

    const[showArrow, setShowArrow] = useState(false)

    const arrow = <Arrow setIsShow = {setIsShow} handleShow ={handleShow} i={i}/>

      // State to hold the breakpoint value
    const [breakpoint, setBreakpoint] = useState(800);
     // State to hold the current screen size
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

  // Render different components based on screen size state
  //return screenSize < breakpoint ? <MobileComponent /> : <DesktopComponent />;

    function handleScreenSizeStyle(screenSize){
        if(screenSize > breakpoint){
            return{
                width: show ? "88%": "3%",
                backgroundColor: color,
                onRest: () => setShowContent(!showContent)
            }
        }else{
            return{
                width: show ? "100%": "0%",
                backgroundColor: color,
                onRest: () => setShowContent(!showContent)
            }
        }
    }
    
    const animatedDiv = useSpring(handleScreenSizeStyle(screenSize))
    
    const animatedH2 = useSpring({
        fontWeight: show ? 800: 300,
        opacity: !show && (screenSize < breakpoint) ? 0: 100,
        color: titleColor
    })

    const animatedSubHead = useSpring({
        config: {duration: 0},
        opacity: show ? 100: 0,
        color: titleColor
    })

    return (
        <>
        <animated.div className='card' style={animatedDiv} onClick={() => (setIsShow(handleShow(i)))}>
            <animated.h2 className='title' style={animatedH2} >{tile}</animated.h2>
            <animated.h2 className='fixedHeader' style= {animatedSubHead}>XANDER BURGER<br/>GRAPHIC DESIGN–PROGRAMING</animated.h2>
            {show && content} 
        </animated.div>
        {(screenSize < breakpoint) && show && arrow}
        </>
    )
}
