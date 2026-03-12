import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProjectsPage from './pages/app/ProjectsPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
    </Routes>
  )
}
export default App