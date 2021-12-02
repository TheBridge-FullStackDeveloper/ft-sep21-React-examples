import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div>
                <p>Producto: {this.props.name}, Precio:{this.props.price} € </p>
            </div>
        )
    }
}

export default Product




