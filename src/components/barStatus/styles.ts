import styled from "styled-components";

interface Props{
    height: number;
    type: 'hp' | 'attack' | 'defense' | 'speed' | 'specialattack' | 'specialdefense';
}

const colors ={
    hp: '#FF0AC0',
    attack: '#FF2121',
    defense: '#21D0FF',
    speed: 'lightblue',
    specialattack: '#CA0226',
    specialdefense: '#216BFF',
}
export const Bar = styled.div<Props>`
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    p{ 
        width: 60px;
        text-align: center;
    }
    div{ 
        width: 40px;
        height: 5px;
        background-color: white;
    }
    div:nth-child( n+${props => 15 - props.height} ):nth-child(-n+15){
        background-color: ${props => colors[props.type]};
    }
    position: relative;
    p{
        position: absolute;
        bottom: ${props => { return props.type.length > 8 ? '-27px' : '-15px'}};
        line-height: 12px;
        font-size: 10px;
        color: black;
        font-weight: bold;
    }
`;