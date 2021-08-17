import React from 'react';
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
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }

    body.active::-webkit-scrollbar {
        display: none;
    }
`

export default GlobalStyle;