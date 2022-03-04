import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Navbar() {
    return (
        <ul className="nav justify-content-left">
        <li className="nav-item">
          <Link to={'./'} className="nav-link active" aria-current="page" href="/">Active</Link>
        </li>
        <li className="nav-item">
          <Link to={'./Link'} className="nav-link" href="/Link">Link</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="./Link">Link</a>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="/.Link" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      
    )
}

