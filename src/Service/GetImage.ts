
export function getImages(id:number) {
    let code = (String(id).padStart(3,"0"));
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${code}.png`
}
