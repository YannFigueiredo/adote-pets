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
    }

    h1{
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 700;
        font-size: 30px;
    }

    h2{
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #534d51;
    }

    h3{
        font-family: 'Roboto Slab', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: #534d51;
    }

    body{
        background-color: gray;
    }

    ul li{
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        list-style-type: none;
    }

    p{
        font-weight: 300;
    }

    .titulo-label{
        font-weight: 700;
        color: #ebc33a;
        font-size: 14px;
        text-transform: uppercase;
    }

    button{
        border: none;
        background-color: #daa769;
        border: 1px solid #daa769;
        font-weight: 700;
        min-width: 150px;
        padding: 15px;
        color: #fff;
        font-size: 15px;
        border-radius: 30px;
        text-transform: uppercase;
        cursor: pointer;
    }
`;

export default GlobalStyles;