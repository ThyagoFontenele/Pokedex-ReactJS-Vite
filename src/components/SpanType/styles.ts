import styled from "styled-components";

interface ContainerProps{
    type: 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' ;
}

const colors = {
    normal: '#a4acaf',
    fighting: '#d56723',
    flying: [ '#3dc7ef','#bdb9b8'],
    poison: '#b97fc9',
    ground: ['#f7de3f', '#ab9842'],
    rock: '#a38c21',
    bug: '#729f3f',
    ghost: '#7b62a3',
    steel: '#9eb7b8',
    fire: '#fd7d24',
    water: '#4592c4',
    grass: '#9bcc50',
    electric: '#eed535',
    psychic: '#f366b9',
    ice: '#51c4e7',
    dragon: ['#53a4cf','#f16e57'],
    dark: '#707070',
    fairy: '#fdb9e9',
}
export const Container = styled.span<ContainerProps>`
    padding: 2px 20px;
    font-size: 12px;
    background: ${props => { 
       if(typeof(colors[props.type]) === "object"){
        return `linear-gradient(180deg, ${colors[props.type][0]} 50%, ${colors[props.type][1]} 50%)`;
       }else{
        return props.type ? colors[props.type] : 'red'
       }
       
    } };
    border-radius: 5px;
    color: white;
    text-transform: capitalize;
    margin-right: 5px;
`