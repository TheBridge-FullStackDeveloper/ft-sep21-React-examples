import React, { useState } from 'react';

const Donate = () => {
  const [count, setCount] = useState(0);
    // useState devuelve un array [state, ()setState]
    // asique usamos destructuring para sacarlos a variables
    // estado --> count
    // ¿Cómo modifico "count"? --> con setCount() --> setState()

    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    return (
        <>  
            <h1>Dóname una cerveza</h1>
            <button name='add' onClick={handleAddClick} >+</button>
            <button name='sub' onClick={handleSubClick} >-</button>
            <h3>Cervezas donadas: {count}</h3>
        </>
    );
};

export default Donate;
