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
    red: '#C1240C',
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
    h1{
        font-size: 2rem;
        font-weight: bold;
        color: #333;
    }
    img{
        width: 400px;
        animation: move 2s linear infinite alternate;
    }
    @keyframes move {
        from{
            transform: translateY(0%);
        }
        to{
            transform: translateY(-6%);
        }
    }
   display: flex;
   justify-content: space-between;
   .firstInfo{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       div{
           p{
               width: 70px;
               margin: 0 auto;
               text-align: center;
               padding: 4px 0;
               border-radius: 4px;
               font-size: 16px;
               background-color: #c4c4c4;
               color: white;
               margin-bottom: 10px;
           }
           span{
               font-size: 16px;
               font-weight: bold;
               text-transform: capitalize;
               padding: 5px 40px;
           }
       }
   }
`;