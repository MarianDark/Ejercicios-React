import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

function ShowContent(props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShow(true)}
      >
        Mostrar Contenido
      </button>
      {show && props.message}
    </div>
  );
}

// Define las PropTypes para el componente
ShowContent.propTypes = {
  message: PropTypes.string.isRequired, // Espera una prop 'message' de tipo string y requerida
};

export default ShowContent;

