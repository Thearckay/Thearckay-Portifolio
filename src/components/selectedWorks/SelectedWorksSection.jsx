import React, { useEffect, useState } from "react";
import './SelectedWorksSection.css';
import { getProjecsForFrontEnd } from "../../api/api";

const SelectedWorksSection = () => {
    const [projects, setProjects] = useState([]);

    const getProjectHandle = async () => {
        const response = await getProjecsForFrontEnd();
        const projectsListFromBackend = response.data[0] || []; 

        const orderedProjects = projectsListFromBackend.sort((a, b)=> {
            return a.order - b.order;
        })
        setProjects(orderedProjects);
    }

    useEffect(() => {
        getProjectHandle();
    }, []);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-header">
                <div className="header-text">
                    <h2 className="title-primary">Trabalhos Selecionados</h2>
                    <p className="subtitle">Um vislumbre dos meus projetos pessoais e acadêmicos.</p>
                </div>
                <a href="https://github.com/Thearckay?tab=repositories" className="btn-all" target="_blank" rel="noreferrer">
                    Ver todos os projetos <span className="arrow">→</span>
                </a>
            </div>

            <div className="projects-grid">
                {
                    projects.map((project, index) => (
                        <div className="card-project" key={index}>
                            <a href={project.deployUrl || project.githubRepository || "#"} target="_blank" rel="noreferrer" className="cards-buttons">
                                
                                <div className="card-visual mobile-view">
                                    <img src={project.pictureUrl} alt={`Capa do projeto ${project.title}`} />
                                </div>
                                
                                <div className="card-body">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tags">
                                        {project.tagList?.map((tag, tagIndex) => (
                                            <span key={tagIndex}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default SelectedWorksSection;