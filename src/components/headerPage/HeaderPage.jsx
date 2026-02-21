import React from 'react'
import Logo from '../logo/Logo'
import './HeaderPage.css'

const HeaderPage = () => {
  return (
    <header className='header'>
        <Logo />
        <ul className='headerPageList'>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Experiência</li>
            <li><button className='headerPageButton'>Vamos Conversar</button></li>
        </ul>
    </header>
  )
}

export default HeaderPage