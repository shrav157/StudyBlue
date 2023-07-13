import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home';
import About from './Components/About';
import Courses from './Components/Courses';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/courses" element={<Courses/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;