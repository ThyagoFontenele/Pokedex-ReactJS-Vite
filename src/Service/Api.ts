import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

export function getImages(id:number) {
    let code = (String(id).padStart(3,"0"));
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${code}.png`
}
