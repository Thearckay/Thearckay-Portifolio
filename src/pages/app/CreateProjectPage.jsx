import React, { useState } from 'react';
import './CreateProjectPage.css';
import Sidebar from '../../components/sideBar/Sidebar';
import ProjectItem from '../../components/projectItem/ProjectItem';
import Notification from '../../components/notification/Notification';
import { useNavigate } from 'react-router-dom';

const CreateProjectPage = () => {

    const navigate = useNavigate();
    const [notification, setNotification] = useState(false);
    const [tittleNotification, setTittleNotification] = useState('');
    const [messageNotification, setMessageNotification] = useState('');

    const closeNotification = () => {
        setNotification(false);
    }

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        projectOrder: 1,
        tagList: '',
        githubRepository: '',
        deployUrl: '',
        pictureFile: null,
        picturePreview: '',
        imagePublicId: ''
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                pictureFile: file,
                picturePreview: URL.createObjectURL(file)
            }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        if (formData.pictureFile) {
            data.append('file', formData.pictureFile);
        }

        const projectRequest = {
            title: formData.title,
            description: formData.description,
            projectOrder: parseInt(formData.projectOrder) || 1, 
            tagList: formData.tagList.trim() !== '' 
                ? formData.tagList.split(',').map(tag => tag.trim()).filter(tag => tag !== '') 
                : [],
            githubRepository: formData.githubRepository,
            deployUrl: formData.deployUrl
        };

        data.append('project', new Blob([JSON.stringify(projectRequest)], {
            type: 'application/json'
        }));

        try {
            const response = await fetch('http://localhost:8080/projects', {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Falha ao salvar projeto');
            }

            const result = await response.json();
            setTittleNotification('Sucesso!');
            setMessageNotification('Projeto salvo com sucesso!');
            setNotification(true);
            setTimeout(() => {
                setNotification(false);
                navigate('/projects');
            }, 3000);

        } catch (error) {
            setTittleNotification('Erro');
            setMessageNotification('Houve um problema ao conectar com o servidor.');
            setNotification(true);
            console.error("Erro no envio:", error);
            setTimeout(() => {
                setNotification(false);
            }, 3000);
        }
    };

    return (
        <div className="admin-layout">
            <Sidebar />
            <main className="create-project-main">
                <header className="page-header">
                    <h1>Criar Projeto</h1>
                    <p>Povoar seu portfólio com uma nova obra-prima.</p>
                </header>
                <Notification tittle={tittleNotification} message={messageNotification} isOpen={notification} setIsOpen={setNotification} onClose={closeNotification}/>
                <div className="content-grid">
                    <section className="form-section">
                        <form className="project-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Título do Projeto</label>
                                <input
                                    name="title"
                                    placeholder="ex: Dashboard de Análise Quantum"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-group">
                                <label>Descrição</label>
                                <textarea
                                    name="description"
                                    rows="5"
                                    placeholder="Aprofunde-se na funcionalidade..."
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="row">
                                <div className="input-group half">
                                    <label>Peso da Ordem</label>
                                    <input 
                                        type="number" 
                                        name="projectOrder" 
                                        value={formData.projectOrder} 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="input-group half">
                                    <label>Etiquetas (separadas por vírgula)</label>
                                    <input 
                                        name="tagList" 
                                        value={formData.tagList}
                                        placeholder="React, Java, Spring" 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label>Repositório GitHub</label>
                                <input 
                                    name="githubRepository" 
                                    placeholder="https://github.com/..." 
                                    onChange={handleChange} 
                                />
                            </div>

                            <div className="input-group">
                                <label>URL de Implantação</label>
                                <input 
                                    name="deployUrl" 
                                    placeholder="https://live-demo.com" 
                                    onChange={handleChange} 
                                />
                            </div>

                            <div className="input-group">
                                <label>Capa do Projeto (Upload)</label>
                                <div className="file-upload-wrapper">
                                    <label htmlFor="file-input" className="custom-file-upload">
                                        <i className="bi bi-cloud-arrow-up"></i>
                                        {formData.pictureFile ? formData.pictureFile.name : "Escolher arquivo..."}
                                    </label>
                                    <input
                                        id="file-input"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />

                                    {formData.picturePreview && (
                                        <img src={formData.picturePreview} alt="Mini Preview" className="mini-preview" />
                                    )}
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="save-btn">Salvar Projeto</button>
                                <button type="button" className="cancel-btn">Cancelar</button>
                            </div>
                        </form>
                    </section>

                    <section className="preview-section">
                        <span className="preview-label">PRÉ-VISUALIZAÇÃO AO VIVO</span>
                        <div className="preview-card-wrapper">
                            <ProjectItem
                                id="preview"
                                title={formData.title || "Título do Projeto"}
                                description={formData.description || "Descrição..."}
                                tags={formData.tagList ? formData.tagList.split(',') : []}
                                pictureUrl={formData.picturePreview || "https://via.placeholder.com/400x200"}
                                githubRepository={formData.githubRepository}
                                deployUrl={formData.deployUrl}
                                isPreview={true}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default CreateProjectPage;