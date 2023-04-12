import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    :root{
        --green: #00BFA6;
        --black: #2C2B3D;
        --gray: #C2C2C2;
        --white: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        color: var(--white);
        background: var(--black);
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
    }
`