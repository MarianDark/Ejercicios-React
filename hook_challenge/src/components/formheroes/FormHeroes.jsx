import { useState, useEffect } from 'react';
import './FormHeroes.css'; 

function FormHeroes() {
 const [name, setName] = useState('');
 const [heroeName, setHeroeName] = useState('');

 useEffect(() => {
   console.log('hook -> NAME:', name);
 }, [name]);

 useEffect(() => {
    console.log('hook -> LASTNAME: ', heroeName);
  }, [heroeName]);
 
 return (
   <div className="form-container"> 
     <input 
       className="input-field" 
       value={name} 
       onChange={(event) => setName(event.target.value)} 
       placeholder="Enter your name" 
     />
     <input 
       className="input-field" 
       value={heroeName} 
       onChange={(event) => setHeroeName(event.target.value)} 
       placeholder="Enter your hero name" 
     />
   </div>
 );
}

export default FormHeroes;
