import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  
  const handleDes = () => setCounter(counter - 1);

  const handleRest = () => setCounter(value);
  

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button aria-label='add' onClick={handleAdd}>+1</button>
      <button aria-label='des' onClick={handleDes}>-1</button>
      <button aria-label='reset' onClick={handleRest}>Reset</button>
    </div>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}