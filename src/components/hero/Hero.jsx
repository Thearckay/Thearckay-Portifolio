import React from 'react'
import './Hero.css'
import heroImage from '../../assets/images/thearckay.jpg'

const Hero = () => {
return (
    <section className="hero" id='home'>
    <div className="hero-content">
        <span className="hero-tagline">Estudante Full Stack & Desenvolvedor de Software</span>
        <h1> 
            Kayck <br/> 
            <span>Arcanjo</span> 
        </h1>

        <p className="hero-description">
            Sou estudante de Análise e Desenvolvimento de Sistemas. Gosto de entender como as coisas funcionam por trás da interface e estou construindo meus primeiros projetos para aplicar o que aprendo na faculdade. Atualmente, meu foco é dominar o ecossistema Java e o desenvolvimento web com React.
        </p>

        <div className="skills-wrapper">
            <div className="badge lang-en"><span className="dot blue"></span> Inglês B1</div>
            <div className="badge lang-es"><span className="dot yellow"></span> Espanhol Básico</div>
            
            <div className="badge tech-react">
                <i className="bi bi-code"></i>
                React
            </div>
            <div className="badge tech-java">
                <i className="bi bi-cup-hot-fill"></i>
                Java
            </div>
            <div className="badge tech-kotlin">
                <i className="bi bi-android"></i>
                Kotlin
            </div>
            <div className="badge tech-spring">
                <i className="bi bi-terminal"></i>
                Spring Boot
            </div>
            <div className="badge tech-mysql">
                <i className="bi bi-database"></i>
                MySQL
            </div>
            <div className="badge tech-javascript">
                <i className="bi bi-code-slash"></i>
                JavaScript
            </div>
        </div>

        <div className="hero-actions">
            <button className="btn-primary"><a href="#projects" className='hero-button' target='_blank'>Ver Projetos</a></button>
            <button className="btn-secondary"><a href="https://github.com/Thearckay" className='hero-github-button' target='_blank'>GitHub</a> <i className="bi bi-box-arrow-up-right"></i></button>
        </div>
    </div>

    <div className="hero-image-container">
        <img src={heroImage} alt="Kayck Arcanjo - Desenvolvedor Full Stack" />

        <div className="status-badge">
            <span className="status-dot"></span> Disponível para novos projetos
        </div>
    </div>
</section>
)}

export default Hero