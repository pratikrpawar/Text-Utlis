import logo from './logo.svg';
import Navbar from './components/navbar';
import Text from './components/text';
import About from './components/about'
import './App.css';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState("white");
  const toggleMode=()=>
  {
    if(mode==="white")
    {
      console.log("turn dark");
      setMode("dark");
    }
    else{
      console.log("turn white");
      setMode("white");
    }
  }
  return (
    <>
    <Navbar mode={mode} togglemode={toggleMode}/>
    <Text name="Pratik" mode={mode} togglemode={toggleMode}/>
    </>
  );
}

export default App;
