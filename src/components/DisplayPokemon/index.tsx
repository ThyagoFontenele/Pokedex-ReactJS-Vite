import { useState , useEffect } from 'react'
import { api } from '../../Service/Api'
import { getImages } from '../../Service/GetImage'
import { Container } from './styles';
import { Link } from 'react-router-dom'
import { SpanType } from '../SpanType/index';
import {  Pokemon, Datas, datasInitial } from '../../Service/Types';

export function DisplayPokemon({name, url}:Pokemon){

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
                    <p>Nº {String(datas.id).padStart(3, '0')}</p>
                    <h2>{name}</h2>
                    {datas.types.map(e => (
                        <SpanType key={e.type.name} text={e.type.name}/>
                    ))}
                </section>
            </Container>
        </Link>
        
    )
}