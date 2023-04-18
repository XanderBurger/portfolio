import React from 'react'
import "./header.css"

export default function Header({title, subhead, introText}) {
  return (
    <div className='header'>
      <div className='title'>
            <h1>{title}</h1>
            <h2 className="subhead">{subhead}</h2>
        </div>
        <p className="introText">
            {introText}
        </p>
    </div>
  )
}
