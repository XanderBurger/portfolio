import Card from "./Card";
import Content from "./Content";
import {useEffect, useRef, useState} from "react"

function App() {
  const [isShow, setIsShow] = useState([false, false, false, false])
  
  function handleShow(i){
     const newList = [false, false, false, false]
     newList[i] = true
     return newList
   }

  return (
   
    <div className="App">
      <div onClick= {() => {setIsShow(handleShow(0))}}>
        <Card color={"#2C9B73"} show={isShow[0]} content={Content} tile={"tester bar"} />
      </div>
      <Card color={"#5377D2"} show={isShow[1]} content={Content} tile={"tester bar"}/>
      <Card color={"#DBC821"} show={isShow[2]} content={Content} tile={"tester bar"}/>
      <Card color={"#CF4F47"} show={isShow[3]} content={Content} tile={"tester bar"}/>
    </div>
  );
}

export default App;
