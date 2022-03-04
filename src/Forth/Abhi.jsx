import React from "react";
import { Routes, Route } from "react-router-dom";
import Aboout from "./Aboout";
import Menu from "./Menu";
import Contact from "./Contact";
const App = ()=>{
    return (
    <>
    <Menu/>
    <Routes>
    <Route path="/Aboout" element ={<Aboout/>}/>
    <Route path="/contact" element={<Contact/>}/>
    
    </Routes>
    
    </>
    )
};

export default App;