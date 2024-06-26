import { useState } from 'react'; // Importa React
import Axios from 'axios'; // Importa Axios
import './App.css'; // Importa los estilos CSS

const App = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: '',
    number: '',
    species: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    type: '',
  });
  const [error, setError] = useState(false); // Estado para manejar errores de búsqueda

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name,
        });
        setPokemonChosen(true);
        setError(false); // Reiniciar el estado de error
      })
      .catch(() => {
        setError(true); // Mostrar mensaje de error si la búsqueda falla
        setPokemonChosen(false); // Resetear el estado de pokemonChosen
      });
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => setPokemonName(event.target.value)}
          value={pokemonName.toLowerCase()}
        />
        <button onClick={searchPokemon}>Search Pokémon</button>
      </div>
      <div className="DisplaySection">
        {error ? (
          <h1>Failed to fetch Pokémon. Please try again.</h1>
        ) : !pokemonChosen ? (
          <h1>Please choose a Pokémon</h1>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>Number: #{pokemon.number}</h3>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
            <h4>Speed: {pokemon.speed}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
