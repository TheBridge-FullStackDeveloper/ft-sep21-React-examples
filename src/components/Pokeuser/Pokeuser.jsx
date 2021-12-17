import React, { useEffect, useState } from 'react';
//import axios from 'axios'
import useFetch from '../../hooks/useFetch';
import Orbitals from '@bit/joshk.react-spinners-css.orbitals';
//import {Orbitals} from 'react-spinners-css';

const Pokeuser = () => {
  /*
    const [pokemons, setPokemons] = useState([]);

    // Emula a un ComponentDidMount pasando array vacío [] al final
    useEffect(() => {
      const getPokemons = async () =>{
          const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
          setPokemons(resp.data.results); // Guarda en estado [{},{},{}] de pokemons
      }
      getPokemons();
    },[]);
  */

  const {loading,result} = useFetch('https://pokeapi.co/api/v2/pokemon')
  const pokemons = result.results

  return (
    <section>
      <h1>Mis pokeusers</h1>
      <ul>
        {loading?<Orbitals color="brown" />:pokemons.map((pokemon,i)=><li key={i}>Nombre: {pokemon.name}</li>)}
      </ul>
    </section>
  );
};

export default Pokeuser;
