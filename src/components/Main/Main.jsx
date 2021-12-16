import React, { Component } from 'react'
import Products from '../Products'
import Staff from '../Staff'
import Contact from '../Contact'
import About from '../About'
import Donate from '../Donate'
import Pokeuser from '../Pokeuser'
import Topics from '../Topics'
import {Route, Routes} from 'react-router-dom';


export class Main extends Component {
    render() {
        return (
            <main>
                <Routes>
                    <Route path="/" element={<Products/>} exact />
                    <Route path="/about" element={<About/>} />
                    <Route path="/staff" element={<Staff/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/donate" element={<Donate/>} />
                    <Route path="/pokeuser" element={<Pokeuser/>} />
                    <Route path="/topics" element={<Topics/>} />
                </Routes>
            </main>
        )
    }
}

export default Main
