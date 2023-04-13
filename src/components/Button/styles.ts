import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    height: 56px;  

    padding: 0 16px;

    background: var(--white);
    color: var(--black);

    border: 0;
    border-radius: 10px;

    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    cursor: pointer;

    &:hover{
        background-color: var(--green);
        color: var(--white);
    }
`