import "./index.css"
import React from 'react'
import Header from "../bodyComponets/header"
import mainPhoto from "./assets/mainPhoto.png"




export default function TRIWebsite({canLoad}) {
    
    console.log(canLoad)

  return (
    <div className="TRIBody">
        <Header title="TRI Data Visualization" 
        subhead="Data Visualization / Web Design" 
        introText="A website visualization insights found in the EPA's Toxic Release Inventory."
        />
        <div className="finishedImage">
            <img loading="lazy" src={mainPhoto} alt="website image"/>
        </div>
        <div className="link">
        <a className='sketchLink' href="https://xanderburger.github.io/WRIT-221-Final-TRI-INFO/" target="_blank">Visit Website</a>
        </div>
        <p className="midText">
        </p>
    </div>
  )
}
