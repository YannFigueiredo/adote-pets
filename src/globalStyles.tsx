import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        padding: 0 15px;
    }

    h1{
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 700;
    }

    body{
        background-color: gray;
    }

    ul li{
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        list-style-type: none;
    }
`;

export default GlobalStyles;