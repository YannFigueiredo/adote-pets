import styled from 'styled-components';

export const Container = styled.div `
    background-color: #fff;
    padding: 15px;
    position: relative;

    .btn-controle-voltar, .btn-controle-avancar{
        font-size: 50px;
        color: #000;
        background-color: #96948f;;
        border-radius: 50%;
        padding: 5px;
        position: absolute;
    }

    .btn-controle.voltar{
        left: 0;
    }

    .btn-controle-avancar{
        right: 0;
    }
    
    section{
        display: flex;
        margin-top: 10px;
        overflow: auto;
    }

    section article{
        margin-right: 10px;
    }
`