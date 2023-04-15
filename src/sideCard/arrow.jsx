import {useSpring, animated} from "react-spring"

export default function Arrow({setIsShow, handleShow, i}) {
    
    const animatedLeft = useSpring({
        opacity:(i === 4) ? 0: 100
    })

    const animatedRight = useSpring({
        opacity:(i === 0) ? 0: 100
    })

    return (
    <div className='arrowContainer'>
        <animated.div className='left' style={animatedLeft} onClick={() => (setIsShow(handleShow(Math.min(i+1, 4))))}> <h2>BACK</h2></animated.div>
        <animated.div className='right' style = {animatedRight} onClick={() => (setIsShow(handleShow((Math.max(i-1, 0)))))}><h2>NEXT</h2></animated.div>
    </div>
  )
}
