import React, { useState } from 'react';
import beer from '../../assets/beer.png'
import './Donate.css'

const Donate = () => {
  const [count, setCount] = useState(0);
    // useState devuelve un array [state, ()setState]
    // asique usamos destructuring para sacarlos a variables
    // estado --> count
    // ¿Cómo modifico "count"? --> con setCount() --> setState()

    const [values, setValues] = useState({
                                            name: '',
                                            email: ''            
                                        });

    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value

        setValues({
            name,
            email
        })
        console.log(values)
    }

    return (
        <section>  
            <h1>Dóname una cerveza</h1>
            
            <img src={beer} alt="beer" className="beer"/>
            
            <br /> 
            <h3>Cervezas a donar: {count}</h3>
            <button name='add' onClick={handleAddClick} >+</button>
            <button name='sub' onClick={handleSubClick} >-</button>
            
            <h3>Datos de contacto</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label><br/>
                <input name="name" type="name"></input><br/>
                <label htmlFor="email">Email</label><br/>
                <input name="email" type="email"></input><br/>

                <button>Donar</button>
            </form>


            {values.name && values.email?<h3>Cervezas donadas: {count} por {values.email}</h3>:""}
        </section>
    );
};

export default Donate;
