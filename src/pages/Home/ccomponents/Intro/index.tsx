import { Container } from './styles';

export default function Intro(){
    return(
        <Container>
            <span className='titulo-label'>Ame e cuide!</span>
            <h1>Vários pets disponíveis para serem amados</h1>
            <p>
                Cachorros e Gatos sem um lar precisam de você. Clique abaixo e inicie um processo de adoção para adicionar mais um membro à sua família.
            </p>
            <button>Adote agora</button>
        </Container>
    );
}