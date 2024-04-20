import './App.css';

import ShowContent from './components/showcontent/ShowContent';
import BeerCounterTime from './components/beercountertime/BeerCounterTime';
import FormHeroes from './components/formheroes/FormHeroes';
import JoseMaSinger from './components/josemasinger/JoseMaSinger';



const App = () => {
  
  return (
    <div className="app">
      <ShowContent message="Hola Upgraders"/>
      <BeerCounterTime message="La cuenta atrás ha terminado - ¡Es hora de tomar una cerveza!" />
      <h1>My Hero Form</h1>
      <FormHeroes />
      <JoseMaSinger message="HA nacido una estrella"/>
    </div>
  );
}

export default App;