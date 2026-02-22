import React from 'react'
import Logo from '../logo/Logo'
import './HeaderPage.css'

const HeaderPage = () => {
  return (
    <header className='header'>
        <Logo />
        <ul className='headerPageList'>
            <li><a href="#home" className='headerPageButtons'>Sobre</a></li>
            <li><a href="#projects" className='headerPageButtons'>Projetos</a></li>
            <li><a href="#experience" className='headerPageButtons'>Experiência</a></li>
            <li><button className='headerPageButton'><a href="https://wa.me/5573998006947" target='_blank' className='headerPageButtons'>Vamos Conversar</a></button></li>
        </ul>
    </header>
  )
}

export default HeaderPage