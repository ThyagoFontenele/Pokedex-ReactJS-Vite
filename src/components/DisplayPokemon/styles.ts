import styled from "styled-components";

export const Container = styled.li`
    div{
        background: #e9e9e9;
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 0.2rem;
        cursor: pointer;
        img{
            width: 200px;
            position: absolute;
            transition: all 0.5s;
        }
        &:hover img{
            width: 260px;
        }
    }
    section{
        text-transform: capitalize;
        padding: 2px;
        p{
            color: #6C6A6A;
            font-size: 1rem;
            font-weight: 600;
        }
        h2{
            color: #111;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 2px 0;
        }
        span{
            margin-right: 5px;
        }
    }
    
  
`;