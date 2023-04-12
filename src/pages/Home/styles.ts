import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    place-content: center;
    
    img{
        width: 400px;
        height: 300px;
    }

    > div{
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`