import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container, LogoArea, NavArea, Menu, SubMenu } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

export default function Header(){
    const [menu, setMenu] = useState(false);
    const [menuPets, setMenuPets] = useState(false);

    return(
        <Container>
            <LogoArea>
                <div>
                    <img src={logo} alt='Logo'/>
                </div>
                <Link to='/'>Adote Pets</Link>
            </LogoArea>
            <NavArea>
                <GiHamburgerMenu className='btn-menu' onClick={() => {setMenu(!menu)}}/>
                <Menu style={{display: menu ? 'flex' : 'none'}}>
                    <a><li>Home</li></a>
                    <li className='menu-select'>
                        <div onClick={() => {setMenuPets(!menuPets)}}>
                            <span>Pets</span>
                            <IoIosArrowDown size={15} color='#fff'/>
                        </div>
                        <SubMenu style={{display: menuPets ? 'flex' : 'none'}}>
                            <a><li>Cachorros</li></a>
                            <a><li>Gatos</li></a>
                        </SubMenu>
                    </li>
                    <a><li>Time</li></a>
                    <a><li>Contato</li></a>
                </Menu>
            </NavArea>
        </Container>
    );
}