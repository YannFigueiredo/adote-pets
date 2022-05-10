import styled from 'styled-components';

export const Container = styled.section `
    margin-top: 25px;
    background-color: #fff;
    padding: 10px 15px;
` 

export const Header = styled.div `
    text-align: center;
`

export const Cards = styled.div `
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    margin-top: 20px;

    article div img{
        width: 100%;
    }

    article h3, article p{
        margin-top: 8px;
        padding: 0 15px;
    }

    article p{
        color: #96948f;
        font-size: 13px;
        font-weight: 400;
    }
`