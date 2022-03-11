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


export const Scop = styled.div`
    *{
        text-transform: capitalize;
        box-sizing: border-box;
    }
    display: flex;
    padding: 30px;
    background-color: #fafafa;
    border-radius: 2px;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
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
            transform: translateY(-4%);
        }
    }
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
               box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
           }
           span{
               font-size: 16px;
               font-weight: bold;
               text-transform: capitalize;
               padding: 5px 40px;
               box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
           }
       }
   }
   .secondInfo {
       display: flex;
       flex-direction: column;
       gap: 40px;
       align-items: center;

       .defaultInfo{
           display: grid;
           gap: 20px 50px;
           background-color: #30a7d7;
           padding: 20px;
           border-radius: 10px;
           grid-template-columns: 1fr 1fr;
           box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
           font-weight: 700;
           h2{
            color: white;
            font-size: 18px;
           }
           p{
            color: #111;
            font-weight: 500;
           }
       }

       .status{
           .bars{
            display: flex;
            gap: 20px;
            align-items: flex-end;
            justify-self: flex-end;
            background-color: #30a7d7;
            border: 2px solid #111;
            color: white;
            padding: 30px 30px 40px 30px;
            border-radius: 10px;
        }
       }
   }
`;