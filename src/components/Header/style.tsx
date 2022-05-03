import styled from 'styled-components';

export const Container = styled.header `
    display: flex;
    flex-direction: column;
`

export const LogoArea = styled.div `
    display: flex;
    align-items: center;

    div:nth-child(1){
        width: 80px;
    }

    div:nth-child(1) img{
        max-width: 100%;
    }

    a{
        text-decoration: none;
        color: #fff;
        font-family: 'Roboto Slab';
        font-weight: 700;
        font-size: 1.5em;
        margin-left: 15px;
    }
`

export const NavArea = styled.nav `
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .btn-menu{
        color: #daa769;
        background-color: #fff;
        padding: 5px;
        font-size: 40px;
    }

    ul li{
        list-style-type: none;
    }
`