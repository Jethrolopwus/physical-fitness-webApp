// import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from  "./Pages/Home/Home";
import About from  "./Pages/About/About";
import Contact from  "./Pages/Contact/Contact";
import Gallery from  "./Pages/Gallery/Gallery";
import Notfound from  "./Pages/Notfound/Notfound";
import Plans from  "./Pages/Plans/Plans";
import Trainers from  "./Pages/Trainers/Trainers";
import Navbar from "./Components/Navbar";

const App = () => {
  return (  
    <BrowserRouter>
       <Navbar/> 
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <Notfound/>
      <Plans/>
      <Trainers/>
    </BrowserRouter>
  )
}

export default App;