import React, { Component } from 'react'
import Nav from '../Nav'

import {userContext} from '../../context/userContext';

class Header extends Component {
    render() {
        return (
            <header>
                <Nav/>
                <userContext.Consumer>
                {
                    /*
                    value => <>
                                <h3>Hola {value.user.name}</h3>
                                <button onClick={value.logout}>Logout</button>
                             </> 
                             */
                    ({user,logout}) => user.name?
                                            <>
                                                <h3>Hola {user.name}</h3>
                                                <button onClick={logout}>Logout</button>
                                            </> // forma pro
                        
                                            :"" //--> else
                }
                </userContext.Consumer>
            </header>
        )
    }
}

export default Header
