import { useState } from 'react';
import { Container, Header, Cards } from './styles';

import historia1 from '../../../../assets/historias01.jpg';
import historia2 from '../../../../assets/historias02.jpg';
import historia3 from '../../../../assets/historias03.jpg';
import historia4 from '../../../../assets/historias04.jpg';
import historia5 from '../../../../assets/historias05.jpg';
import historia6 from '../../../../assets/historias06.jpg';

export default function Historias(){
    const [cardsHistorias, setCardsHistorias] = useState([
        {id: 1, titulo: 'Lola e Kiko foram adotados!', descricao: 'A família Oliveira levou a dupla bagunceira para casa para terem muito amor.', foto: historia1},
        {id: 2, titulo: 'Vários amigunhos ganharam um lar', descricao: 'A Sra. Amanda adotou vários filhos, fazendo a família aumentar muito.', foto: historia2},
        {id: 3, titulo: 'Kitty ganhou novos pais', descricao: 'O adorável casal André e Maria Souza levou para casa a fofinha Kitty, a gata mais meiga da nossa instituição.', foto: historia3},
        {id: 4, titulo: 'Frodo aumentou ainda mais uma família', descricao: 'A família Duarte adicionou um filho para ser o protetor das duas filhas biológicas.', foto: historia4},
        {id: 5 , titulo: 'Horácio está feliz com uma nova família', descricao: 'Lucas e sua filha Alcie adotaram o carinhoso e fiel cão Horácio.', foto: historia5},
        {id: 6, titulo: 'Cão e gato ganharam uma família', descricao: 'O casal Pereira adotou Abel e Caim, aceitando o desafio de fazer os dois brigões conviverem juntos', foto: historia6}
    ]);

    return(
        <Container>
            <Header>
                <span className='titulo-label'>Novas famílias</span>
                <h2>Pets adotados recentemente e muito felizes</h2>
            </Header>
            <Cards>
                {cardsHistorias.map(card => (
                    <article key={card.id}>
                        <div>
                            <img src={card.foto} alt='Foto da história'/>
                        </div>
                        <h3>{card.titulo}</h3>
                        <p>{card.descricao}</p>
                    </article>
                ))
                }
            </Cards>
        </Container>
    );
}