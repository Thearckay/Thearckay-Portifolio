import React from 'react'
import './ProjectItem.css'
// import { deleteProjectHandlerApiConnection } from '../../api/api'
import { useNavigate } from 'react-router-dom'


const ProjectItem = ({id, title, description, pictureUrl, githubRepository, deployUrl, tags, isPreview=false, onClickDelete}) => {

    const navigate = useNavigate()

    // const handlerDeleteProject = async () => {
    //     deleteProjectHandlerApiConnection(id)
    //     window.location.reload()
    // }

    const handlerDeleteProject = async () => {
        onClickDelete(id)
    }

    const handlerEditProject = () => {
        navigate(`/projects/edit/${id}`)
    }


    if (!id) {
        return null
    }

    if(!deployUrl || deployUrl === '') {
        deployUrl = githubRepository
    }

    if(pictureUrl == '' || pictureUrl == null){
        pictureUrl = "https://res.cloudinary.com/dvz6c7kzx/image/upload/v1773502140/loginImagemBackground_uo0x7j.avif"
    }


    

    return (
        <div className="card-project-container">
            <a href={deployUrl} target='_blank' className="cards-buttons">
                <div className="card-visual-projects ">
                    <img className="visual-image-projects" src={pictureUrl} alt="Project Icon" />
                </div>
                <div className="card-body-projects">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tags-container-projects">
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
            </a>
            
            {
                isPreview? null : (
                    <div className='projects-edit-buttons-div'>
                    <button onClick={handlerEditProject}>
                        <i className="bi bi-pencil-fill"></i>
                    </button>
                    <button onClick={handlerDeleteProject}>
                        <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
                )
            }
        </div>
    )
}

export default ProjectItem