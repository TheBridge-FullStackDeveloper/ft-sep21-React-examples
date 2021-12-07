import React, { Component} from 'react'
import Product from './Product'

export class Products extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            lastAdded:{}, // {name:"naranja",price:"1"} // Modifica el estado. Último añadido
            productList:[] // [{},{},{},{},{},{}] --> Para guardar los productos
        }
    }
    

    createProduct = () => {
        
        //const name = "naranja"
        //const price = "1" 
        const name = prompt("Introduce producto")
        const price = prompt("introduce precio")
        const newProduct = {name,price}

        
        this.setState({lastAdded:newProduct}) // Modifica el estado. Ultimo añadido

        //alert(`Producto ${name}, precio: ${price} € Creado`)
    }
    deleteAllProducts = () => {
        alert("Borrado")
    }

    render() {
        const data = [{name:"tostada",price:"1.5", supplier:"Cafecitos SA"},
                        {name:"cafe",price:"1" , supplier:"La Competencia SL"},
                        {name:"zumo de naranja",price:"2"},
                        {name:"huevos fritos",price:"5"}]

        const name = this.state.lastAdded.name

        return (
            <div>
                <Product info={data[0]}/>
                <Product info={data[1]}/>
                <Product info={data[2]}/>
                <Product info={data[3]}/>

                <button onClick={this.deleteAllProducts}>Borrar</button>
                <button onClick={this.createProduct}>Crear</button>
                <h5>Último elemento creado:{name}</h5>
            </div>
        )
    }
}

export default Products
