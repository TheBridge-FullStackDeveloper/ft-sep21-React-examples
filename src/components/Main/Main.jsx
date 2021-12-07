import React, { Component } from 'react'
import Products from '../Products'


export class Main extends Component {
    render() {
        return (
            <main>
                <h1>Esto es el main</h1>
                <p>Aquí irá la sección principal</p>
                <Products/>
            </main>
        )
    }
}

export default Main
