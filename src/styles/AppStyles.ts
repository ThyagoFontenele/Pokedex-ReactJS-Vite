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
    
`;