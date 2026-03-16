import { useNavigate, useParams } from "react-router-dom";
import { deleteImageProjectByProjectId, getProjectHandlerApiConnection, updateProjectHandle } from "../../api/api";
import Sidebar from "../../components/sideBar/Sidebar";
import { useEffect, useRef, useState } from "react";
import ProjectItem from '../../components/projectItem/ProjectItem'
import "./EditProjectPage.css";
import Notification from '../../components/notification/Notification'

const EditProjectPage = () => {

const { id } = useParams();
const navigate = useNavigate()
const fileRef = useRef(null)

const [notificationInfo, setNotificationInfo] = useState({title: '', message: '', type:''})

const cancelHandle = () => {
    navigate("/projects")
}

const closeNotification = () => {
    setNotificationInfo({title:'', message:'', type: ''})
}

const [project, setProject] = useState({
    deployUrl: "",
    description: "",
    githubRepository: "",
    id: "",
    order: 1,
    pictureUrl: "",
    tagList: [""],
    title: "",
});

const handlerGetProject = async () => {
    const resp = await getProjectHandlerApiConnection(id);
    const projectFromDatabase = resp.data[0];

    setProject({
        ...project,
        ...projectFromDatabase,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "tagList") {
            const taglistArr = value.split(",")
            setProject(prev => ({ ...prev, [name]: taglistArr }))
        } else {
            setProject(prev => ({ ...prev, [name]: value }));
        }
    }

    const deleteImageHandle = async () => {
        const statusResponse = await deleteImageProjectByProjectId(project.id);
        if(statusResponse == 200){
            setNotificationInfo({title: 'Sucesso!', message: 'Imagem deletada com sucesso!', type: 'success'})
            setTimeout(()=> {
                handlerGetProject()
            },1000)
        } else {
            setNotificationInfo({title: 'Erro!', message: 'O projeto não possui Imagem', type: 'erro'})
        }
    }

    const salveHandle = async (e) =>{
        e.preventDefault()
        const data = new FormData()
        const file = fileRef.current.files[0]

        if(file){
            data.append("file", file)
        }
        const projectDataJsonBlob = new Blob([JSON.stringify(project)],{
            type: 'application/json'
        })
        data.append('project', projectDataJsonBlob )


        const jsonResponse = await updateProjectHandle(data, project.id)
        if(jsonResponse.status == 200){
            setNotificationInfo({title:'Sucesso!', message: jsonResponse.message, type: 'success'})
            setTimeout(()=>{
                navigate("/projects")
            }, 3000)
        } else {
            setNotificationInfo({title:'Erro!', message: jsonResponse.message, type: 'erro'})
        }
    }

    useEffect(() => {
        handlerGetProject();
    }, []);

    return (
        <section className="edit-project-section">
        <Sidebar />
        <main className="edit-project-main">
            <Notification title={notificationInfo.title} message={notificationInfo.message} type={notificationInfo.type} onClose={closeNotification}  />
            <header className="header-edit-project">
                <h1>Editar projeto</h1>
                <p>Editar as informaões do projeto</p>
            </header>
            <section className="edit-card-container">
                <div className="edit-card-header">
                    <i className="bi bi-info-circle"></i>
                    <span>INFORMAÇÕES GERAIS</span>
                </div>

                <form className="edit-project-form" onSubmit={salveHandle}>
                    <div className="edit-input-group">
                    <label>TÍTULO DO PROJETO</label>
                    <input
                        type="text"
                        name="title"
                        value={project.title}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="edit-input-group">
                    <label>DESCRIÇÃO</label>
                    <textarea
                        name="description"
                        rows="4"
                        value={project.description}
                        onChange={handleChange}
                    ></textarea>
                    </div>

                    <div className="edit-row">
                    <div className="edit-input-group">
                        <label>LINK GITHUB</label>
                        <div className="input-with-icon">
                        <i className="bi bi-github"></i>
                        <input
                            name="githubRepository"
                            value={project.githubRepository || ''}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className="edit-input-group">
                        <label>URL DE IMPLANTAÇÃO</label>
                        <div className="input-with-icon">
                        <i className="bi bi-globe"></i>
                        <input
                            name="deployUrl"
                            value={project.deployUrl || ''}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    </div>

                    <div className="edit-row">
                    <div className="edit-input-group">
                        <label>TAGS (SEPARADAS POR VÍRGULA)</label>
                        <input
                        name="tagList"
                        value={project.tagList}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="edit-input-group">
                        <label>ORDEM DE EXIBIÇÃO</label>
                        <input
                        type="number"
                        name="order"
                        value={project.order}
                        onChange={handleChange}
                        />
                    </div>
                    </div>

                    <div className="edit-input-group">
                        <label>URL DA IMAGEM DE CAPA</label>
                        <div className="input-with-button">
                            <input
                            name="pictureUrl"
                            value={project.pictureUrl}
                            onChange={handleChange}
                            />
                            
                        </div>
                    </div>
                    <input type="file" name="file" id="file" className="upload-icon-btn" placeholder="Enviar imagem de fundo" ref={fileRef}/>
                    <button className="edit-form-delete-image-button" type="button" onClick={deleteImageHandle}>
                        Deletar imagem atual
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                    <div className="edit-form-footer">
                        <button type="button" className="edit-cancel-btn" onClick={cancelHandle}>
                            Cancelar
                        </button>
                        <button type="submit" className="edit-save-btn">
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </section>
            <div className="project-edit-preview">
                <ProjectItem
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    githubRepository={project.githubRepository}
                    deployUrl={project.deployUrl}
                    tags={project.tagList}
                    pictureUrl={project.pictureUrl}
                    isPreview={true}
                />
            </div>
        </main>
        </section>
    );
};

export default EditProjectPage;
