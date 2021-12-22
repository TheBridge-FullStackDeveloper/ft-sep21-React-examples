import React, { useState } from 'react'
import Button from '../Button/Button';

const Rating = () => {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }

  return (
    <div>
      <h1>Rating</h1>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <br />
      <h2>Este es el rating</h2>
      <span>{count}</span>
    </div>
  )
};

export default Rating;
