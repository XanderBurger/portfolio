import Card from "./Card";
import Content from "./Content";
import {useEffect, useRef, useState} from "react"

const projectContent = <Content/>

function App() {
  const [isShow, setIsShow] = useState([false, false, false, false, true])

  function handleShow(i){
     const newList = [false, false, false, false]
     newList[i] = true
     return newList
   }

  return (
   
    <div className="App">
      <Card color={"#2cb482"} show={isShow[0]} setIsShow={setIsShow} handleShow = {handleShow} i={0} content={projectContent} tile={"Project 4"} titleColor={"#0F0F0E"}/>
      <Card color={"#416fe3"} show={isShow[1]} setIsShow={setIsShow} handleShow = {handleShow} i={1} content={projectContent} tile={"Project 3"} titleColor={"#0F0F0E"}/>
      <Card color={"#ffe928"} show={isShow[2]} setIsShow={setIsShow} handleShow = {handleShow} i={2} content={projectContent} tile={"Project 2"} titleColor={"#0F0F0E"}/>
      <Card color={"#ff483a"} show={isShow[3]} setIsShow={setIsShow} handleShow = {handleShow} i={3} content={projectContent} tile={"Project 1"} titleColor={"#0F0F0E"}/>
      <Card color={"#0F0F0E"} show={isShow[4]} setIsShow={setIsShow} handleShow = {handleShow} i={4} content={projectContent} tile={"About Me"}  titleColor={"white"}/>
    </div>
  );
}

export default App;
