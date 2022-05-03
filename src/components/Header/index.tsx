import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container, LogoArea, NavArea } from './style';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header(){
    return(
        <Container>
            <LogoArea>
                <div>
                    <img src={logo} alt='Logo'/>
                </div>
                <Link to='/'>Adote Pets</Link>
            </LogoArea>
            <NavArea>
                <GiHamburgerMenu className='btn-menu'/>
                <ul>
                    <a><li></li></a>
                </ul>
            </NavArea>
        </Container>
    );
}