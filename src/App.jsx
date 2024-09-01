import { useState, useEffect } from "react";
import "./App.css";
import WindowSize from "./components/WindowSize";
import Counter from "./components/Counter";
import CounterOne from "./components/Timer";
import Timer from "./components/Timer";
import WindowSizeOne from "./components/WindowSizeOne";

function App() {
  const[text, setText] = useState('');
  const[name, setName] = useState("Babbar");
  
  // variation 1  every render
  // useEffect(()=>{
  //   console.log("UI RENDERING DONE");
  // })


  //variation 2 -- first Render
  // useEffect( () => {
  //   console.log("UI RENDER DONE here");
  // }, []);

  // variation 3 -- first render + whenever dependency changes
  // useEffect(()=>{
  //   console.log("Changes observed")
  // }, [name]);


  // variation 4 :: 
  useEffect(()=>{
    console.log("Eventlistener added");
    return()=>{
      console.log("EventListener reoved");
    }
  }, [text])


  function changeHandeler(event){
    setText(event.target.value)
   console.log(text);
  }


  return (
    <div>
   <div className="wrap">
    <input type="text" className="border"  onChange={changeHandeler}></input>
   </div>
   <WindowSize></WindowSize>
   <Counter></Counter>
   <Timer></Timer>
   <WindowSizeOne></WindowSizeOne>

   </div>
  );
}



export default App;
