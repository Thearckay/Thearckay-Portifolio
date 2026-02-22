import React from 'react'
import './ExperienceSection.css'

const ExperienceSection = () => {
    return (
        <section className="experience-section" id='experience'>
        <h2 className="section-title">Experiência</h2>
        <div className="timeline-container">
            <div className="timeline-line"></div>

            <div className="timeline-item">
                <div className="timeline-dot dot-active"></div>
                <div className="timeline-content">
                    <div className="timeline-header">
                        <h3>Projetos Acadêmicos</h3>
                        <span className="status-pill current">Atual</span>
                    </div>
                    <span className="institution">Análise e Desenvolvimento de Sistemas</span>
                    <p>Desenvolvo sistemas práticos como parte da graduação em ADS na UNIASSELVI, aplicando fundamentos de engenharia de software e lógica de programação. Utilizo Java para a criação de aplicações desktop e estruturação de bancos de dados relacionais com MySQL, focando em transformar a teoria acadêmica em código funcional.</p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <div className="timeline-header">
                        <h3>Estudos Independentes</h3>
                        <span className="status-pill">Contínuo</span>
                    </div>
                    <span className="institution">Full Stack Development</span>
                    <p>Foco no estudo do ecossistema Full Stack e desenvolvimento mobile nativo. Dedico-me à integração de backends em Spring Boot com interfaces em React via APIs REST, além de explorar o desenvolvimento Android com Kotlin, utilizando Git para versionamento e documentação do meu progresso técnico</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ExperienceSection