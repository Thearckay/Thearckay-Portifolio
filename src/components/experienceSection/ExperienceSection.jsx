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
                    <p>Desenvolvimento de soluções práticas e teóricas durante o curso, aplicando conceitos de engenharia de software e programação.</p>
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
                    <p>Aprofundamento em tecnologias modernas como React, Spring Boot e Mobile Development com foco em boas práticas.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ExperienceSection