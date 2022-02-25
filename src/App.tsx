import { useState, useEffect } from 'react'
import { DisplayPokemon } from './components/DisplayPokemon/index';
import { GlobalStyle } from "./styles/global";
import { api } from './Service/Api';
import { Container } from './styles/AppStyles';
import { Header } from './components/Header/index'
import { Pokemon } from './Service/Types'

export default function App() {
  
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [pokemonLimit, setPokemonLimit] = useState<Pokemon[]>([]);
  const [numLoad, setNumLoad] = useState(15);
  const [name, setName] = useState('');
  useEffect(()=>{
    api.get(`pokemon?limit=898&offset=0`)
    .then(res => setPokemon([...res.data.results]))
    .catch(err => console.log(err));
  }, []) 

  useEffect(()=>{
    api.get(`pokemon?limit=${numLoad}&offset=0`)
    .then(res => setPokemonLimit([...res.data.results]))
    .catch(err => console.log(err));
  }, [numLoad])  
  
  return (

    <>
      <Container>
        <Header/>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <ul>
          {pokemonLimit.filter(e => {
            if(name === ''){
              return e;
            }else if(e.name.toLowerCase().includes(name.toLowerCase())) {
              return e;
            }
          }).map(e => (
           
            <DisplayPokemon key={e.name} name={e.name} url={e.url}/>
          ))}
        </ul>
        <button onClick={() => {setNumLoad(state => state + 15)}}>+ Pokémon</button>
        <GlobalStyle/>
      </Container>

    </>
  )
}

