import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { api } from '../../Service/Api';
import { Container } from './styles';
import {getImages} from '../../Service/Api'

type Ability = {
    ability: {
        name: string,
        url: string,
    }
}
type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
    }
}
type Type = {
    type: {
        name: string,
        url: string
    }
    
}
type Specie = {
    url: string;
}
interface Pokemon {
    name: string;
    abilities: Ability[];
    stats: Stat[];
    species: Specie;
    types: Type[];
}
const pokemonInitialData = {
    name: "",
    abilities: [
        {
            ability: {
                name: "",
                url: "",
            }
        }
    ],
    stats: [
        {
            base_stat: 0,
            effort: 0,
            stat: {
                name: ''
            }
        }
    ],
    species: {
        url: ""
    },
    types: [
        {
            type: {
                name: "",
                url: ""
            }
        }
    ]
} as Pokemon
export function Pokemon(){
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>(pokemonInitialData)

    useEffect(() => {

        (async () => {
            const { data } = await api.get(`/pokemon/${id}`);
            const { name, abilities, stats, species, types } = data;
            setPokemon({name, abilities, stats, species, types});
            console.log(stats)
        })()

    },[])

    return(
        <Container>
            
          <div>
            <h1>{pokemon.name}</h1> 
            <img src={getImages(Number(id))} alt={`imagem ${pokemon.name}`}/>
          </div>
          <div>
            <p>Habilidades</p>
            {pokemon.abilities.map(e => (
                <p key={e.ability.name}>{e.ability.name}</p>
            ))} 
          </div>

          <p>Status</p>
          {pokemon.stats.map(e => (
            <p key={e.stat.name}>{e.base_stat} {e.stat.name}</p>
          ))}

          <p>Tipos</p>
          {pokemon.types.map(e => (
            <p key={e.type.name}>{e.type.name}</p>
          ))}

        </Container>
    )
}