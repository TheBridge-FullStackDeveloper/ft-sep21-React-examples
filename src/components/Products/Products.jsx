import React, { Component } from 'react'
import Product from './Product'
import data from '../../data'

export class Products extends Component {

    constructor(props) {
        super(props)

        this.name = React.createRef();

        this.state = {
            lastAdded: {}, // {name:"naranja",price:"1"} // Modifica el estado. Último añadido
            productList: data // [{},{},{},{},{},{}] --> Para guardar los productos
        }
    }

    createProduct = (name,price,supplier) => {

        //const name = "naranja"
        //const price = "1" 
        //const name = prompt("Introduce producto")
        //const price = prompt("introduce precio")
        const newProduct = {name, price, supplier}

        this.setState({ lastAdded: newProduct }) // Modifica el estado. Ultimo añadido
        this.setState({ productList: [...this.state.productList, newProduct] })
        //alert(`Producto ${name}, precio: ${price} € Creado`)
    }
    //Vaciar el array productList
    deleteAllProducts = () => this.setState({ productList: [] })
    
    // Pasar la posicion a borrar del array productList
    // Buscar en el array el elemento a borrar

    deleteProduct = i => {
        const products = this.state.productList.filter((product, j) => j !== i)
        this.setState({ productList: products })
    }

    paintProducts = () => {
        // lee de state productList OK
        // Los recorre con un bucle ->Transformar datos de array a componente Product--> MAP
        // Los pinta en el DOM
        // {} ---> <Product>
        //[{},{},{},{}] ---> [<Product>,<Product>,<Product>,<Product>,<Product>]
        // Devuelve [<Product>,<Product>,<Product>,<Product>,<Product>]
        return this.state.productList.map((product, i) => <Product info={product} delete={() => this.deleteProduct(i)} key={i} />)
    }

    handleChange = event => console.log(event.target.value)

    handleSubmit = event => {
        event.preventDefault();
        const name = this.name.current.value // por referencia
        const price = event.target.price.value
        const supplier = event.target.supplier.value
        
        // Crear producto
        this.createProduct(name,price,supplier)
    }

    render() {
        const name = this.state.lastAdded.name

        return (
            <div>
                <h2>Alta de nuevo producto</h2>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nombre:</label><br/>
                    <input type="text" id="name" name="name" onChange={this.handleChange} ref={this.name}/><br />
                    <label htmlFor="price">Precio:</label><br/>
                    <input type="number" id="price" name="price"/><br/>
                    <label htmlFor="supplier">Proveedor:</label><br/>
                    <input type="text" id="supplier" name="supplier"/><br />
                    <input type="submit"/>
                </form> 
                


                {this.paintProducts()}
                <button onClick={this.deleteAllProducts}>Borrar todo</button>
                <button onClick={this.createProduct}>Crear</button>
                <h5>Último elemento creado:{name}</h5>
            </div>
        )
    }
}

export default Products
