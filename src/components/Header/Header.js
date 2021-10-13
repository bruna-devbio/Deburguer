import React from 'react';
import { useHistory } from "react-router-dom";
import './Header.css'

function Header() {
    const history = useHistory();

    const handleClick = () => {
        localStorage.clear()
        history.push('/')      
    }

    return (
        <nav className='nav-bar'>
            <div className='logo-header'>
            </div>
            <div className='links-hall'>
                <a href='/Hall'>Salão</a>
                <a href='/Kitchen'>Cozinha</a>
                <a href='/OrderReady'>Pedidos</a>
                <i onClick={handleClick} className="fas fa-sign-out-alt"></i>                
            </div>
        </nav>
    );
}

export default Header;