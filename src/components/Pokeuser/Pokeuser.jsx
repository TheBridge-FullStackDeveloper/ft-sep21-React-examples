import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Pokeuser = () => {

  const [pokemons, setPokemons] = useState([]);

  // Emula a un ComponentDidMount pasando array vacío [] al final
  useEffect(() => {
    const getPokemons = async () =>{
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(resp.data.results); // Guarda en estado [{},{},{}] de pokemons
    }
    getPokemons();
  },[]);

  return (
    <ul>
      {pokemons.map((pokemon)=><li>Nombre: {pokemon.name}</li>)}
    </ul>
  );
};

export default Pokeuser;
