import { useState , useEffect } from 'react'
import { api, getImages } from '../../Service/Api'
import { Container } from './styles';
import { Link } from 'react-router-dom'
import { SpanType } from '../SpanType/index';

interface PokemonProps{
    name: string;
    url: string;
}
type Type = {
    type: {
        name: string,
        url: string
    }
}
interface Datas{
    id: number;
    types: Type[];
}

const datasInitial = {
    id: 0,
    types: [
        {
            type: {
                name: "",
                url: ""
            }
        }
    ]
} as Datas

export function DisplayPokemon({name, url}:PokemonProps){

    const [datas, setDatas] = useState<Datas>(datasInitial);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(url);
            const { id, types } = data;
            setDatas({id, types});
        })()
    },[])
    return(
         
        <Link to={`Pokemon/${datas.id}`}>
            <Container>  
                <div>
                    <img src={getImages(datas.id)} alt={`imagem ${name}`}/>
                </div>
                <section>
                    <p>Nº {datas.id}</p>
                    <h2>{name}</h2>
                    {datas.types.map(e => (
                        <SpanType key={e.type.name} text={e.type.name}/>
                    ))}
                </section>
            </Container>
        </Link>
        
    )
}