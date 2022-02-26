import styled from "styled-components";


interface ContainerColor {
    color: 'black' | 'blue' | 'brown' | 'gray' | 'green' | 'pink' | 'purple'| 'red' | 'white' | 'yellow';
}

const colors = {
    black: '#212121',
    blue: '#3dc7ef',
    brown: '#502B06',
    gray: '#a4acaf',
    green: '#729f3f',
    pink: '#fdb9e9',
    purple: '#b97fc9',
    red: '#F8240B',
    white: '#EAEAEA',
    yellow: '#F1D419'
}
export const Container = styled.section<ContainerColor>`
    width: 100%;
    background-color: ${props => (colors[props.color])} ;
    h1, p {
        text-transform: capitalize;
    }
    img{
        width: 300px;
    }
    @keyframe move{
        to{
            transform:;
        }
    }
    span{
        padding: 10px 40px;
        font-size: 16px;
        margin: 10px;
    }
`;