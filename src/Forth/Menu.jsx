import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = ()=> {
    return(
    <>
    <NavLink to='/'>about</NavLink>
    <NavLink to='/contact'>contact</NavLink>
    <br/>

   <a href='/'> About </a>
   <a href='/contact'> contact </a>

    </>
    ); 
        
        };
export default Menu;