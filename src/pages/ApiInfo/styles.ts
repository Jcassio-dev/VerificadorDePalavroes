import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    grid-template-rows: 100px auto;
    grid-template-areas:
    "header"
    "main"
    ;
`

export const Header = styled.div`
    grid-area: header;

    padding: 20px;


    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 5px;


    h1{
        font-family: 'JetBrains Mono';
        font-weight: 700;
        font-size: 28px;
        line-height: 40px;
    }
`

export const Main = styled.div`
    grid-area: main;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 0 20px;

    h1{
        text-align: center;
        font-size: 24px;
        font-family: 'JetBrains Mono';
        color: var(--green);
    }

    .Sections{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 10px;
        width: 100%;
    }

`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    width: 100%;


    h2{
        font-size: 15px;
        width: 100%;
        text-align: center;
    }

    div{
        background-color: #222042;

        height: 150px;
        min-width: 150px;
        max-width: 500px;
        width: 100%;

        display: flex;
        flex-direction: column;

        border-radius: 10px;

        padding: 15px;

        overflow-y: auto;

        font-family: 'JetBrains Mono';
    }

`


export const Form = styled.div`
    font-family: 'JetBrains Mono';
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h3, span{
        text-align: center;
    }

    .inputWrapper{
        display: flex;

        input{
            border-radius: 10px 0 0 10px;
        }
        button{
            border-radius: 0 10px 10px 0;
            background-color: #222042;
            color: white;
        }
    }


`
