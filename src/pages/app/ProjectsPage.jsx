import React, {useEffect, useState } from 'react'
import './ProjectsPage.css'
import Sidebar from '../../components/sideBar/Sidebar'
import ProjectItem from '../../components/projectItem/ProjectItem'
import { deleteProjectHandlerApiConnection, getProjectsHandlerApiConnection } from '../../api/api'
import Notification from '../../components/notification/Notification'
import DeleteProjectModal from '../../components/deleteProjectModal/DeleteProjectModal'

const ProjectsPage = () => {

  const [notification, setNotification] = useState({title: '', message: '', type: ''})
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false)
  const [idToDelete, setIdToDelete] = useState(-1)

  const deleteProjectHandle = async () => {
    console.log('o id para deleção é: '+idToDelete)
    const respStatus = await deleteProjectHandlerApiConnection(idToDelete)

    if(respStatus == 200){
      closeModal()
      setTimeout(()=>{
        handlerGetProjects()
      },2000)
    }else {
      setNotification({title: 'Erro', message: 'Erro ao tentar deletar Projeto', type:'erro'})
    }
    
  }
  const closeNotification = () => {
    setNotification({title:'', message: '', type: ''})
  }

  const closeModal = () => {
    setDeleteConfirmationModal(false)
  }

  const openModal = (id) => {
    setIdToDelete(id)
    setDeleteConfirmationModal(true)
  }
  const [projectsList, setProjectsList] = useState([{
    deployUrl: "",
    description: "",
    githubRepository: "",
    id: 1,
    pictureUrl: "",
    tagList: [],
    title: ""
  }])

  const handlerGetProjects = async () => {
    const backendResponse = await getProjectsHandlerApiConnection()
    console.log(backendResponse)
    if(backendResponse.status == 200){
      const projects= backendResponse.data[0]
      setNotification({title: 'Carregado!', message: backendResponse.message, type: 'success'})
      const projectsOrdered = projects.sort((a, b)=> {
        return a.order - b.order;
      })
      setProjectsList(projectsOrdered)
    } else {
      setNotification({title: 'Erro!', message: 'Erro ao carregar os projetos', type: 'erro'})
      console.error('Error fetching projects:', backendResponse.message)
    }
  }

  useEffect(() => {
    handlerGetProjects()
  }, [])

  return (
    <section className='projectsSection'>
      <Sidebar />
      <DeleteProjectModal isActived={deleteConfirmationModal} onClose={closeModal} onDelete={deleteProjectHandle}/>
      <main className='projectsMainSection'>
        <Notification title={notification.title} message={notification.message} type={notification.type} onClose={closeNotification} />
        <header className='projectsHeader'>
          <h1>Projects</h1>
        </header>
        <section className='projects-grid'>
          {
            projectsList.map((project) => (
            <ProjectItem 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                githubRepository={project.githubRepository}
                deployUrl={project.deployUrl}
                tags={project.tagList} 
                pictureUrl={project.pictureUrl}
                onClickDelete={openModal}
            />
          ))
        }
        </section>
      </main>
    </section>
  )
}

export default ProjectsPage