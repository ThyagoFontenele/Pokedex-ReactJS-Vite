import styled from "styled-components";

export const Container = styled.div`
    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        margin: 30px 0;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    button{
        background-color: #30a7d7;
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 1.3rem;
        padding: 10px 40px;
        border-radius: 0.25rem;
        margin-bottom: 40px;
    }
    @media (max-width: 1180px){
        .pokeball{
            width: 60px;
        }
        ul{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 780px){
        .pokeball{
            left: 10px;
        }
    }
    @media (max-width: 600px){
        ul{
            grid-template-columns: 1fr;
        }
    }
    
`;