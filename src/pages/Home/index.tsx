import Intro from './components/Intro';
import Historias from './components/Historias';
import Carrossel from '../../components/Carrossel';

import { useState } from 'react';

import voluntario01 from '../../assets/voluntario01.jpg';
import voluntario02 from '../../assets/voluntario02.jpg';
import voluntario03 from '../../assets/voluntario03.jpg';
import voluntario04 from '../../assets/voluntario04.jpg';

export default function Home(){
    const [ voluntarios, setVoluntarios ] = useState([
        {id: 1, nome: 'Vinicius Soares', foto: voluntario01},
        {id: 2, nome: 'Jefferson Rodrigues', foto: voluntario02},
        {id: 3, nome: 'Débora Souza', foto: voluntario03},
        {id: 4, nome: 'Benedito Duarte', foto: voluntario04}
    ]);

    return(
        <section>
            <Intro/>
            <Historias/>
            <Carrossel itens={ voluntarios } titulo={'Nossos voluntários'}/>
        </section>
    );
}