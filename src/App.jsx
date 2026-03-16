import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProjectsPage from './pages/app/ProjectsPage'
import ProtectedRoute from './components/security/ProtectedRoute'
import CreateProjectPage from './pages/app/CreateProjectPage'
import EditProjectPage from './pages/app/EditProjectPage'

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/projects" element={
        <ProtectedRoute children={<ProjectsPage />} />
      }/>
      <Route path='/projects/create' element={
        <ProtectedRoute children={<CreateProjectPage />} />
      }/>
      <Route path='/projects/edit/:id' element={
        <ProtectedRoute children={<EditProjectPage />} />
      }/>
    </Routes>
  )
}
export default App