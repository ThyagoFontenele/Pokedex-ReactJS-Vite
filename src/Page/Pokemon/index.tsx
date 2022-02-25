import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { api } from '../../Service/Api';
import { Container } from './styles';
import {getImages} from '../../Service/GetImage';
import { SpanType } from '../../components/SpanType/index';
import { PokemonInfo, SpeciesDatas, pokemonInitialData, specieInfoInitialData } from '../../Service/Types'

export function Pokemon(){

    const { id } = useParams();
    const [pokemon, setPokemon] = useState<PokemonInfo>(pokemonInitialData);

    const [speciesInfo, setSpeciesInfo] = useState<SpeciesDatas>(specieInfoInitialData);

    useEffect(() => {

        (async () => {
            const { data } = await api.get(`/pokemon/${id}`);
            const { name, height, weight, abilities, stats, species, types } = data;
            setPokemon({name, height, weight, abilities, stats, species, types});
        })();
    },[])

    useEffect(() => {
        if(pokemon.species.url.length > 0){
            (async () => {
                const { data } = await api.get(pokemon.species.url);
                const { evolution_chain, habitat } = data;
                setSpeciesInfo({evolution_chain, habitat});
                console.log(speciesInfo)
            })();
        }
    }, [pokemon.species.url]);

    return(
        <Container>

          <div> 
            <h1>{pokemon.name}</h1> 
            <img src={getImages(Number(id))} alt={`imagem ${pokemon.name}`}/>
          </div>
          <div>
            <p>Habitat: {speciesInfo.habitat.name}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Habilidades</p>
            {pokemon.abilities.map(e => (
                <p key={e.ability.name}>{e.ability.name}</p>
            ))} 
          </div>
          <div>
            <p>Status</p>
            {pokemon.stats.map(e => (
                <p key={e.stat.name}>{e.base_stat} {e.stat.name}</p>
            ))}
          </div>
          
          <div>
            <p>Type</p>
            {pokemon.types.map(e => (
                <SpanType key={e.type.name} text={e.type.name} />
            ))}
          </div>
          
        </Container>
    )
}