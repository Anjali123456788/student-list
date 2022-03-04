import React from "react";
import { Routes, Route } from "react-router-dom";
import Active from "./Active";
import Link from "./Link";
const Main=()=>{
    return(
        <>
        
        <Routes>
        <Route path="/" element={<Active/>}/>
        <Route exact path="/Link" element={<Link/>}/>

        </Routes>
        </>
    )
}
export default Main;