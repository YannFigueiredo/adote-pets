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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .btn-menu{
        color: #daa769;
        background-color: #fff;
        padding: 5px;
        font-size: 40px;
        cursor: pointer;
        margin-bottom: 3px;
    }

    ul{
        background-color: #000;
        display: flex;
        flex-direction: column;
        width: 320px;
    }

    ul li{
        color: white;
        padding: 7px 15px;
    }
`

export const Menu = styled.ul `
    div span{
        font-size: 1.1em;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    li{
        border-top: 1px solid #fff;
        font-size: 1.1em;
    }

    a{
        display: inline-block;
        font-size: 1.1em;
    }
`

export const SubMenu = styled.ul `
    max-width: 100%;

    li{
        border: none;
        margin-left: 15px;
        margin-top: 5px;
        font-size: 0.7em;
        color: rgba(255, 255, 255, .6) !important;
    }
`