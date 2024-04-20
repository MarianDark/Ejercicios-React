import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './BeerCounterTime.css';

function BeerCounterTime({ message }) {
  const [count, setCount] = useState(5);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Beer Counter Time</h1>
      <p className="counter">Cuenta atrás: {count}</p>
      {count === 0 ? (
        <p className="message">{message}</p>
      ) : (
        <button className="button" onClick={decrementCount}>Contador</button>
      )}
    </div>
  );
}

// Define las PropTypes para el componente
BeerCounterTime.propTypes = {
  message: PropTypes.string.isRequired, // Espera una prop 'message' de tipo string y requerida
};

export default BeerCounterTime;
