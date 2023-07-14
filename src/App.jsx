import logo from './logo.svg';
import './App.css';
import Canvas from "./Canvas";
import image from "./image.jpg";
import {makeBrignterBlackout} from "./utils";
import { useEffect, useState } from 'react';

function App() {
  
  const [value, setValue] = useState(0);
  //const changeValue = (event) =>{
  //    setValue(event.target.value)
  //}

  const processImage=(imageData)=>{
    
    setValue(Number(document.getElementById('rangeSlider').value))
    
    return makeBrignterBlackout(imageData, value)
  }

  return (
    
    <>
      <div className="App">
        <Canvas image={image} processImage={processImage}/>
        <input type='range' id='rangeSlider' value={value} onChange={processImage} min={-128} max={128} step={10}></input>
      </div>
    </>
  );
}

export default App;
