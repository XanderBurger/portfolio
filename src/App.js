import Card from "./Card";
import Content from "./Content";
import {useEffect, useRef, useState} from "react"

const projectContent = <Content/>

function App() {
  const [isShow, setIsShow] = useState([false, false, false, false, true])

  const black = "#0F0F0E"
  const red = "#ff483a"
  const yellow = "#ffe928"
  const blue = "#416fe3"
  const green ="#2cb482"


  function handleShow(i){
     const newList = [false, false, false, false]
     newList[i] = true
     return newList
   }

  return (
   
    <div className="App">
      <Card color={green} show={isShow[0]} setIsShow={setIsShow} handleShow = {handleShow} i={0} content={projectContent} tile={"Project 4"} titleColor={black}/>
      <Card color={blue} show={isShow[1]} setIsShow={setIsShow} handleShow = {handleShow} i={1} content={projectContent} tile={"Project 3"} titleColor={black}/>
      <Card color={yellow} show={isShow[2]} setIsShow={setIsShow} handleShow = {handleShow} i={2} content={projectContent} tile={"Project 2"} titleColor={black}/>
      <Card color={red} show={isShow[3]} setIsShow={setIsShow} handleShow = {handleShow} i={3} content={projectContent} tile={"Project 1"} titleColor={black}/>
      <Card color={black} show={isShow[4]} setIsShow={setIsShow} handleShow = {handleShow} i={4} content={projectContent} tile={"About Me"}  titleColor={"white"}/>
    </div>
  );
}

export default App;
