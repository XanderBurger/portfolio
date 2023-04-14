import React from 'react'

export default function Arrow({setIsShow, handleShow, i}) {
    

    return (
    <div className='arrowContainer'>
        <div className='left' onClick={() => (setIsShow(handleShow(Math.min(i+1, 4))))}> <h2>BACK</h2></div>
        <div className='right' onClick={() => (setIsShow(handleShow((Math.max(i-1, 0)))))}><h2>NEXT</h2></div>
    </div>
  )
}
