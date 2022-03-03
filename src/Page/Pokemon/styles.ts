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
export const Container = styled.div<ContainerColor>`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => (colors[props.color])} ;
`;

export const Section = styled.section`
    width: 960px;
    max-height: 100%;
    * {
        text-transform: capitalize;
    }
    h1{
        margin-bottom: 20px;
    }
    background-color: #fafafa;
    padding: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;


    .firstInfo{
        display: flex;
        img{
            max-width: 400px;
            animation: move 1s;
        }
        
    }
    
    
    @keyframes move{
        from{
            opacity: 0;
            transform: translateX(-30px);
        }
        to{
            transform: translateX(0px); 
            opacity: 1;
        }
    }
    span{
        font-size: 1rem;
        padding: 5px 30px;
    }
`;