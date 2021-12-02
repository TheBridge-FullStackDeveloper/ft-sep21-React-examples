import React, { Component } from 'react'
import Product from './Product'

export class Products extends Component {
    render() {
        return (
            <div>
                <Product name="tostada" price="1.5"/>
                <Product name="cafe" price="1"/>
                <Product name="zumo de naranja" price="2"/>
                <Product name="huevos fritos" price="5"/>
            </div>
        )
    }
}

export default Products
