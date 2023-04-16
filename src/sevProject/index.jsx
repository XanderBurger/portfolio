import "./index.css"
import React from 'react'
import mainPhoto from "./assets/SevProjectCorrectedBright.png"
import sketch1 from "./assets/sevSketch1.png"
import sketch2 from "./assets/sevSketch2.png"
import sketch3 from "./assets/sevSketch3.png"
import equipment1 from "./assets/PXL_20210615_163539239.jpg"
import equipment2 from "./assets/PXL_20210615_170914779.jpg"
import closeUp from "./assets/PXL_20210801_011300542.jpg"

export default function SevProject() {
  return (
    <div className="sevBody">
        <p className="introText">
            A project done in collaboration with the Sevilleta National Wildlife Refuge about the collection and transfer of digital ecological data.
        </p>
        <div className="finishedImage">
            <img src={mainPhoto} alt="finished artwork" />
            <p className="subHead"><b>"Digitized Landscape"</b><br/>60"x48"–drawing on paper & screen print </p>
        </div>
        <div className="sketches">
            <img src={sketch1} alt="sketch" />
            <img src={sketch2} alt="sketch" />
            <img src={sketch3} alt="sketch" />
            <p className="subHead"><b>"Data"</b><br/>16"x10"–drawings on paper </p>
        </div>
        <p className="midText">
        </p>
        <div className="landscapeImages">
            <img src={equipment1} alt="equipment in desert" />
            <img src={equipment2} alt="equipment in desert" />
            <img src={closeUp} alt="artwork close up" />
            <p className="subHead">subhead</p>
        </div>
    </div>
  )
}
