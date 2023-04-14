import React from 'react'

export default function Arrow({setIsShow, handleShow, i}) {
    

    return (
    <div className='arrowContainer'>
        <button className='left' onClick={() => (setIsShow(handleShow(Math.min(i+1, 4))))}> ≤- </button>
        <div className='right' onClick={() => (setIsShow(handleShow((Math.max(i-1, 0)))))}> -≥ </div>
    </div>
  )
}
