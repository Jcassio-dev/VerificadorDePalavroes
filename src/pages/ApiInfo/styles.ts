import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    grid-template-rows: 100px auto;
    grid-template-areas:
    "header"
    "content"
    ;
`

export const Header = styled.div`
    grid-area: header;
    width: 100%;

    padding: 20px;
    

    display: flex;
    align-items: center;
    justify-content: space-between;

`