import React, { Component } from 'react'

export class Product extends Component {
    
    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
            supplier: this.props.info.supplier || "Vega SA" 
        }
    }
    
    render() {
        const {name,price} = this.props.info

        return (
            <div>
                <p>Producto:{name}, Precio:{price} € Proveedor: {this.state.supplier}</p>
                <button onClick={this.props.delete}>Borrar</button>
            </div>
        )
    }
}

export default Product




