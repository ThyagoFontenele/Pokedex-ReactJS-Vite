import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

export function getImages(id:number) {
    let code;
    if(id < 10){
        code = `00${id}`
    }
    else if(id >= 10 && id < 100){
        code = `0${id}`
    }
    else{
        code = id.toString();
    }
    const res = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${code}.png`;
    return res;
}
