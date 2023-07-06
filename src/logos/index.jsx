import "./index.css"
import React from 'react'
import Header from "../bodyComponets/header"
import logos from "./assets/AllLogos.png"
import logo1 from "./assets/TreeTent.png"
import logo2 from "./assets/BZN.png"
import logo3 from "./assets/Patch.png"



export default function BACLogos({canLoad}) {
    
    console.log(canLoad)

  return (
    <div className="logoBody">
        <Header title="Bozeman Adventure Club Logos" 
        subhead="Logo Design" 
        introText="A series of logo mockups for the Bozeman Adventure Club."
        />
        <div className="finishedImage">
            <img loading="lazy" src={logo1} alt="sketch" />
            <img loading="lazy" src={logo2} alt="sketch" />
            <img loading="lazy" src={logo3} alt="sketch" />
            <img loading="lazy" src={logos} alt="finished artwork" />

        </div>
        <div className="subPhotos">
            {/* <img loading="lazy" src={logo1} alt="sketch" />
            <img loading="lazy" src={logo2} alt="sketch" />
            <img loading="lazy" src={logo3} alt="sketch" /> */}
        </div>
        <p className="midText">
        </p>
    </div>
  )
}
