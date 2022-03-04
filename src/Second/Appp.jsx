import React from "react";
import { Routes, Route } from "react-router-dom";
import Aabout from "./Aabout";
import Contect from "./Contect";
import Run from "./Run";
import Anjali from "./Anjali";

const Appp = ()=>{
    return (
    <>
    <Routes>
    <Route path="/Aabout" element ={<Aabout/>}/>,
    <Route path="/contect" element={<Contect/>}/>,
    <Route path="/Run" element={<Run/>}/>
    <Route path="/Anjali" element={<Anjali/>}/>
    </Routes>
    
    </>
    )
};
export default Appp;