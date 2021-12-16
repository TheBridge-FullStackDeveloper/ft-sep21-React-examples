import axios from "axios";
import React, { Component } from "react";
import PokemonsApi from "../PokemonsApi/PokemonsApi";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeLista: [] }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
  }

  async componentDidMount(){
    //await new Promise( resolve => setTimeout(resolve, 3000)); // Simular retardo de una carga más "lenta"
    
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = resp.data; // []

    this.setState({
        pokeLista: data.results // []
    })
    console.log('componentDidMount');
  }
  
  render() {
    console.log('RENDER')
    return (
      <section>
        <h1>Directorio de la empresa</h1>
        <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
      </section>
        
    );
  }
}

export default Staff;
