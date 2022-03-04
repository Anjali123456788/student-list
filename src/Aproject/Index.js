import React from 'react'
import {Routes, Route} from "react-router-dom"
import './A.css'
import About from './About'
import Contect from './Contect'
import Home from './Home'
import Service from './Service'
import Aaa from './Aaa'
import Navbar from './Navbar'



export default function Index() {
  return (
    <>
     <Navbar/> 
     <>
   
<Routes>

      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contect" element={<Contect/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/aaa" element={<Aaa/>} />
      <Route exact path="/service" element={<Service/>} />
      </Routes>
      </>
  
    </>
  )
}
