import React from 'react'
import Logo from '../logo/Logo'
import './HeaderPage.css'

const HeaderPage = () => {
  return (
    <header className='header'>
        <Logo />
        <ul className='headerPageList'>
            <li><a href="#home" className='headerPageButtons' id='headerPageAbout'>Sobre</a></li>
            <li><a href="#projects" className='headerPageButtons' id='headerPageProjects'>Projetos</a></li>
            <li><a href="#experience" className='headerPageButtons' id='headerPageExperience'>Experiência</a></li>
            <li>
              <button className='headerPageButton'>
                <a href="https://wa.me/5573998006947" target='_blank' className='headerPageButtons headerPageButtonLink'>
                  Vamos Conversar
                  <i className="bi bi-whatsapp"></i>
                </a>
              </button>
            </li>
        </ul>
    </header>
  )
}

export default HeaderPage