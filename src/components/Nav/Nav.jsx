import React, { useContext }  from 'react'
import {Link} from 'react-router-dom';
// import './Nav.css'

import {themeContext} from '../../context/themeContext';

function Nav() {

  // Consumir contexto
  const { theme,toggleTheme} = useContext(themeContext)

  return <nav className={`nav ${theme}`}>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/staff">Staff</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/donate">Donate</Link></li>
    <li><Link to="/pokeuser">Pokeuser</Link></li>
    <li><Link to="/topics">Topics</Link></li>
    <li><Link to="/rating">Rating</Link></li>
  </ul>
</nav>;
}

export default Nav

