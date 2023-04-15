import Card from "./sideCard/index";
import AboutMe from "./aboutMe/index";
import {useEffect, useRef, useState} from "react"

const projectContent = <AboutMe/>

function App() {
  const [isShow, setIsShow] = useState([false, false, false, false, true])

  const black = "#292828"
  const red = "#EA9FB2"
  const yellow = "#F0BC5B"
  const blue = "#76BAA8"
  const green ="#CCD066"
  const cream = "#FAE4C4"


  function handleShow(i){
     const newList = [false, false, false, false]
     newList[i] = true
     return newList
   }

  return (
   
    <div className="App">
      <Card color={green} show={isShow[0]} setIsShow={setIsShow} handleShow = {handleShow} i={0} content={projectContent} tile={"PROJECT 4"} titleColor={black}/>
      <Card color={blue} show={isShow[1]} setIsShow={setIsShow} handleShow = {handleShow} i={1} content={projectContent} tile={"SEVILLETA–DIGITIZED LANDSCAPE"} titleColor={black}/>
      <Card color={yellow} show={isShow[2]} setIsShow={setIsShow} handleShow = {handleShow} i={2} content={projectContent} tile={"PROJECT 2"} titleColor={black}/>
      <Card color={red} show={isShow[3]} setIsShow={setIsShow} handleShow = {handleShow} i={3} content={projectContent} tile={"PROJECT 1"} titleColor={black}/>
      <Card color={cream} show={isShow[4]} setIsShow={setIsShow} handleShow = {handleShow} i={4} content={projectContent} tile={"ABOUT ME"}  titleColor={black}/>
    </div>
  );
}

export default App;
