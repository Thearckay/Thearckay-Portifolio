import React from "react";
import './SelectedWorksSection.css';

const SelectedWorksSection = () => {
return (
    <section className="projects-section" id="projects">
        <div className="projects-header">
            <div className="header-text">
            <h2 className="title-primary">Trabalhos Selecionados</h2>
            <p className="subtitle">Um vislumbre dos meus projetos pessoais e acadêmicos.</p>
            </div>
            <a href="https://github.com/Thearckay?tab=repositories" className="btn-all" target='_blank'>Ver todos os projetos <span className="arrow">→</span></a>
        </div>

        <div className="projects-grid">
            <div className="card-project">
                <a href="https://github.com/Thearckay/Agenda-de-Contatos---JavaFx" target='_blank' className="cards-buttons">
                    <div className="card-visual">
                        <div className="window-controls">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        </div>
                        <div className="visual-icon">🖥️</div>
                    </div>
                    <div className="card-body">
                        <h3>Agenda de Contatos (Desktop)</h3>
                        <p>Aplicação robusta desenvolvida com Java e JavaFX, integrada com banco de dados MySQL para persistência.</p>
                        <div className="tags">
                        <span>Java</span>
                        <span>JavaFX</span>
                        <span>MySQL</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card-project">
                <a href="https://github.com/Thearckay/Projeto-Contatos-frontend-React" target='_blank' className="cards-buttons">
                    <div className="card-visual">
                        <div className="visual-icon">🌐</div>
                    </div>
                    <div className="card-body">
                        <h3>Agenda de Contatos (Web)</h3>
                        <p>Sistema web completo com API REST em Spring Boot e interface moderna em React para gerenciamento.</p>
                        <div className="tags">
                        <span>React</span>
                        <span>Spring Boot</span>
                        <span>API REST</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="card-project">
                <a href="https://github.com/Thearckay/Calculadora-IMC-Mobile-Kotlin-Com-JetPack-Compose" target='_blank' className="cards-buttons">
                    <div className="card-visual mobile-view">
                        <div className="visual-icon">📱</div>
                    </div>
                    <div className="card-body">
                        <h3>Calculadora de IMC (Mobile)</h3>
                        <p>Aplicativo mobile nativo desenvolvido em Kotlin com foco em UX e performance.</p>
                        <div className="tags">
                        <span>Kotlin</span>
                        <span>Android</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
</section>
);
};

export default SelectedWorksSection;
