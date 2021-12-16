import React, { useState } from 'react';

const Donate = () => {
  const [count, setCount] = useState(0);
    // useState devuelve un array [state, ()setState]
    // asique usamos destructuring para sacarlos a variables
    // estado --> count
    // ¿Cómo modifico "count"? --> con setCount() --> setState()

    const [values, setValues] = useState({
                                            email: '',
                                            password: ''
                                        });

    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        setValues({
            email,
            password
        })
        console.log(values)
    }

    return (
        <>  
            <h1>Dóname una cerveza</h1>
            <button name='add' onClick={handleAddClick} >+</button>
            <button name='sub' onClick={handleSubClick} >-</button>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" type="email"></input>
                <br/><br/>
                <label htmlFor="password">Password</label>
                <input name="password" type="text"></input>

                <button>Login</button>
            </form>
            {values.email && values.password?<h3>Cervezas donadas: {count} por {values.email}</h3>:""}
        </>
    );
};

export default Donate;
