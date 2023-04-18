import "./index.css"
import React from 'react'
import mainPhoto from "./assets/SevProjectCorrected70.png"
import sketch1 from "./assets/sevSketch1.png"
import sketch2 from "./assets/sevSketch2.png"
import sketch3 from "./assets/sevSketch3.png"
import equipment1 from "./assets/PXL_20210615_163539239.jpg"
import equipment2 from "./assets/PXL_20210615_170914779.jpg"
import closeUp from "./assets/PXL_20210801_011300542.jpg"
import Header from "../bodyComponets/header"

export default function SevProject({canLoad}) {
    
    console.log(canLoad)

  return (
    <div className="sevBody">
        <Header title="Digitized Landscape" subhead="Public Arts" 
        introText=" A project done in collaboration with the Sevilleta National Wildlife Refuge about the collection and transfer of digital ecological data."
        />
        <div className="finishedImage">
            <img loading="lazy" src={mainPhoto} alt="finished artwork" />
            {/* <p className="subHead"><b>"Digitized Landscape"</b><br/>60"x48"–drawing on paper & screen print </p> */}
        </div>
        <div className="sketches">
            <img loading="lazy" src={sketch1} alt="sketch" />
            <img loading="lazy" src={sketch2} alt="sketch" />
            <img loading="lazy" src={sketch3} alt="sketch" />
            {/* <p className="subHead"><b>"Data"</b><br/>16"x10"–drawings on paper </p> */}
        </div>
        <div className="landscapeImages">
            <img loading="lazy" src={equipment1} alt="equipment in desert" />
            <img loading="lazy" src={equipment2} alt="equipment in desert" />
            <img loading="lazy" src={closeUp} alt="artwork close up" />
            {/* <p className="subHead">subhead</p> */}
        </div>
        <p className="midText">
        </p>
    </div>
  )
}
