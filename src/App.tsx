import { useState, useEffect } from 'react'
import { DisplayPokemon } from './components/DisplayPokemon/index';
import { GlobalStyle } from "./styles/global";
import { api } from './Service/Api';
import { Container } from './styles/AppStyles';
import { Header } from './components/Header/index'

interface PokemonsProps {
  name: string;
  url: string;
}

export default function App() {
  
  const [pokemon, setPokemon] = useState<PokemonsProps[]>([]);
  const [pokemonLimit, setPokemonLimit] = useState<PokemonsProps[]>([]);
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
        <button onClick={() => setPokemonLimit([...pokemon])}>Pesquisar</button>
        <ul>
          {pokemonLimit.map(e => {
            if(false){
              
            }else{
              return <DisplayPokemon key={e.name} name={e.name} url={e.url}/>
            }
            
          })}
        </ul>
        <button onClick={() => setNumLoad(numLoad + 15)}>+ Pokémon</button>
        <GlobalStyle/>
      </Container>

    </>
  )
}

