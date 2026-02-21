import React from 'react'
import './Hero.css'
import heroImage from '../../assets/images/thearckay.jpg'

const Hero = () => {
return (
    <section className="hero">
    <div className="hero-content">
        <span className="hero-tagline">Estudante Full Stack & Desenvolvedor de Software</span>
        <h1> 
            Kayck <br/> 
            <span>Arcanjo</span> 
        </h1>

        <p className="hero-description">
            Estudante de Análise e Desenvolvimento de Sistemas. 
            Crio experiências digitais que fundem código limpo com estética neon imersiva. 
            Construindo o futuro, um pixel de cada vez.
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
            <button className="btn-primary">Ver Projetos</button>
            <button className="btn-secondary">GitHub <i class="bi bi-box-arrow-up-right"></i></button>
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