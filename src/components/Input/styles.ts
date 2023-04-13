import styled from "styled-components";

export const Container = styled.input`
    min-width: 300px;
    max-width: 500px;
    width: 100%;
    height: 56px;

    background-color: #222042;
    border: none;
    border-radius: 10px;

    padding: 0 14px;

    display: flex;
    align-items: center;

    font-family: 'JetBrains Mono';
    color: var(--green);
    

    &::placeholder{
        color: gray
    }
    
    &:focus{
        border: none;
    }
`