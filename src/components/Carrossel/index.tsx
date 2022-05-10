import { Container } from './styles';
import { Item } from '../../types/Item';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

type Props = { itens: Item[], titulo: string };

export default function Carrossel({ itens, titulo }: Props){
    return(
        <Container>
            <h2>{titulo}</h2>
            <FiArrowLeft className='btn-controle-voltar'/>
            <FiArrowRight className='btn-controle-avancar'/>
            <section>
                {itens.map(item => (
                    <article key={item.id}>
                        <div>
                            <img src={item.foto} alt='Foto do voltuntário'/>
                        </div>
                        <h3>{item.nome}</h3>
                    </article>
                ))}
            </section>
        </Container>
    );
}