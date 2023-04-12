import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    place-content: center;

    padding: 10px;

    img{
        width: 500px;
        height: 400px;
    }

    > div{
        display: flex;
        align-items: center;
        gap: 100px;
        
    }

    @media (max-width: 1280px){
        img{
            display: none;
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;

    h1{
        font-family: 'JetBrains Mono';
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;

        text-align: center;
        span{
            color: var(--green);
        }
    }


`