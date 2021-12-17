import React, { Component} from 'react'
import Nav from '../Nav'
import './Header.css'
import logo from "../../assets/linux.png";

import {userContext} from '../../context/userContext';
import {themeContext} from '../../context/themeContext';

class Header extends Component {

    render() {

        return (
            <themeContext.Consumer>
            {
                ({theme,toggleTheme}) =>
                    <header className={`header ${theme}`}>
                        <img src={logo} alt="linux"/>
                        <div className="header-title">
                            <h1>Mi app super guay</h1>
                            <Nav/>
                        </div>
                        <userContext.Consumer>
                        {
                            /*
                            value => <>
                                        <h3>Hola {value.user.name}</h3>
                                        <button onClick={value.logout}>Logout</button>
                                    </> 
                                    */
                            ({user,logout}) => 
                                    user.name?
                                        <>
                                            <h3>Hola {user.name}</h3>
                                            <button onClick={logout}>Logout</button>
                                        </> // forma pro
                    
                                        :"" //--> else
                        }
                        </userContext.Consumer>

                        <button onClick={toggleTheme}>Cambia</button>

                    </header>
            }
            </themeContext.Consumer>
        )
    }
}

export default Header
