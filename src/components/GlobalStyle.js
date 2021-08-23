import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    body {
        -webkit-transition: all 1s;
        transition: all 1s;
        width: 100%;
        margin: 0 auto;
        letter-spacing: -0.025rem;
        font-family: 'Nanum Gothic', sans-serif;
    }

    body.active {
        overflow: hidden;
        scrollbar-width: none;
    }

    body.active::-webkit-scrollbar {
        display: none;
    }
    h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p, table {
        margin: 0;
        padding: 0
    }
`

export default GlobalStyle;