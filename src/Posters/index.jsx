import "./index.css"
import React from 'react'
import Header from "../bodyComponets/header"
import botb from "./assets/BattleOfBandsPoster.png"
import beer from "./assets/Beer_poster_Revised.png"
import math from "./assets/TypePoster_revised.png"
import garden from "./assets/GardenGaloreIllustrationFinal.png"



export default function Posters({canLoad}) {
    
    console.log(canLoad)

  return (
    <div className="posterBody">
        <Header title="Poster Design" 
        subhead="Print Media" 
        introText="A series of poster designs and mockups."
        />
        <div className="finishedImage">
            

        </div>
        <div className="subPhotos">
            <img loading="lazy" src={math} alt="sketch" />
            <img loading="lazy" src={beer} alt="sketch" />
            <img loading="lazy" src={botb} alt="finished artwork" />
            <img loading="lazy" src={garden} alt="sketch" />
        </div>
        <p className="midText">
        </p>
    </div>
  )
}
