import React, { Component } from "react";
import {Link} from 'react-router-dom';
// import './Nav.css'


class Nav extends Component {
  render() {
    return <nav className="nav">
      <ul className="nav--ul">
        <li className="nav--ul--li"><Link to="/">Home</Link></li>
        <li className="nav--ul--li"><Link to="/about">About</Link></li>
        <li className="nav--ul--li"><Link to="/staff">Staff</Link></li>
        <li className="nav--ul--li"><Link to="/contact">Contact</Link></li>
        <li className="nav--ul--li"><Link to="/donate">Donate</Link></li>
        <li className="nav--ul--li"><Link to="/pokeuser">Pokeuser</Link></li>
        <li className="nav--ul--li"><Link to="/topics">Topics</Link></li>
      </ul>
    </nav>;
  }
}

export default Nav;
