import React, { Component } from 'react'
import './Product.css'

export class Product extends Component {
    
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            supplier: this.props.info.supplier || "Vega SA" 
        }
    }
    
    render() {
        const {name,price,picture} = this.props.info

        return (
            <div>
                <p>Producto:{name}, Precio:{price} € Proveedor: {this.state.supplier}</p>
                
                <figure>
                    <img src={picture} alt={name} className="picture"/>
                    <figcaption> Producto: {name} - {price}€ </figcaption>
                </figure>

                <button onClick={this.props.delete}>Borrar</button>
            </div>
        )
    }
}

export default Product




