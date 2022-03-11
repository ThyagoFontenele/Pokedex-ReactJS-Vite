import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { api } from '../../Service/Api';
import { Container, Scop } from './styles';
import {getImages} from '../../Service/GetImage';
import { SpanType } from '../../components/SpanType/index';
import { PokemonInfo, SpeciesDatas, pokemonInitialData, specieInfoInitialData } from '../../Service/Types'
import { BarStatus } from '../../components/barStatus';

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
            const { color, evolution_chain } = data;
            setSpeciesInfo({color, evolution_chain});
          })();
        }
    }, [pokemon.species.url]);
    console.log(pokemon.species.url)
    
    return(
        <Container color={speciesInfo.color.name}>
          <Scop>
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

            <div className="secondInfo">
              <div className="defaultInfo">
                <div>
                  <h2>Height</h2>
                  <p>{pokemon.height} m</p>
                </div>
                <div>
                  <h2>Weight</h2>
                  <p>{pokemon.weight} kg</p>
                </div>
                <div>
                  <h2>Habilidades</h2>
                  {pokemon.abilities.map(e => (
                      <p key={e.ability.name}>*{e.ability.name}</p>
                  ))}
                </div>
              </div> 
              <div className="status">
                <p>Stats</p>
                <div className="bars">
                  {pokemon.stats.map(e => (
                    <BarStatus key={e.stat.name} height={e.base_stat} type={e.stat.name}/>
                  ))}
                </div>
              </div>
            </div>
            </Scop>
        </Container>
    )
}