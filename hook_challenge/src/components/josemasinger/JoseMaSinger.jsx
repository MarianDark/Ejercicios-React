import  { useState } from 'react';
import './JoseMaSinger.css'; 

const JoseMaSinger = () => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container"> 
      <input 
        className="input-field" 
        type="text" 
        placeholder="Introduce un nombre" 
        value={name} 
        onChange={handleInputChange} 
      />
      {name.toLowerCase() === 'josé maría' ? (
        <p className="message">¡Ha nacido una estrella!</p>
      ) : (
        <p className="message">Sigue intentándolo pero nunca llegarás a ser un buen José María</p>
      )}
      <p className="companions-message">Mensaje para los compañeros:</p>
      <ul className="companions-list"> {/* Aplica los estilos de la lista de compañeros */}
        <li className="companions-list-item">Luis: ¡La música te espera!</li>
        <li className="companions-list-item">Ana: ¡Deslumbra con tu voz!</li>
        <li className="companions-list-item">Carlos: ¡Sé el alma de la fiesta!</li>
      </ul>
    </div>
  );
};

export default JoseMaSinger;
