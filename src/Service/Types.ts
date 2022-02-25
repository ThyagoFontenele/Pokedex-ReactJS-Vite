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
type EvolutionChain = {
    url: string;
}
type Habitat = {
    name: string;
    url: string;
}
export interface PokemonInfo {
    name: string;
    height: number;
    weight: number;
    abilities: Ability[];
    stats: Stat[];
    species: Specie;
    types: Type[];
}

export interface Pokemon{
    name: string;
    url: string;
}

export interface Datas{
    id: number;
    types: Type[];
}

export interface SpeciesDatas {
    evolution_chain: EvolutionChain;
    habitat: Habitat;
}