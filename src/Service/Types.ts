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
type Color = {
    name: any;
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
    color: Color;
    evolution_chain: EvolutionChain;
}

export const pokemonInitialData = {
    name: "",
    height: 0,
    weight: 0,
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
} as PokemonInfo

export const specieInfoInitialData = {
    color: {
        name: '',
        url: ''
    },
    evolution_chain: {
        url: ''
    },
} as SpeciesDatas

export const datasInitial = {
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