import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { api } from '../../Service/Api';
import { Container, Grid, Section } from './styles';
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
            const { color, evolution_chain, habitat } = data;
            setSpeciesInfo({color, evolution_chain, habitat});
          })();
        }
    }, [pokemon.species.url]);

    
    return(
        <Container color={speciesInfo.color.name}>
          <Section>
            
          <Grid>
          
            <div className="firstInfo"> 
              <h1>{pokemon.name} Nº{id?.padStart(3, "0")}</h1> 
              <img src={getImages(Number(id))} alt={`imagem ${pokemon.name}`}/>
              <div>
                <p>Type{pokemon.types.length > 1 ? 's' : ''}</p>
                {pokemon.types.map(e => (
                    <SpanType key={e.type.name} text={e.type.name} />
                ))}
              </div>
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
            </Grid>
          </Section>
        </Container>
    )
}