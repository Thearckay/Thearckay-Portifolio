import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <div className="sidebar-logo">
                <div className="logo-icon"><i className="bi bi-pc-display"></i></div>
                <div className="logo-text">
                    <h3>Admin Panel</h3>
                    <span>Kayck Arcanjo</span>
                </div>
                </div>

                <nav className="sidebar-nav">
                    {/* <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <i className="bi bi-grid-1x2"></i>
                        <span>Dashboard</span>
                    </NavLink> */}

                    <NavLink to="/projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <i className="bi bi-briefcase"></i>
                        <span>Projetos</span>
                    </NavLink>

                    {/* <NavLink to="/messages" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <i className="bi bi-envelope"></i>
                        <span>Mensagens</span>
                    </NavLink> */}

                    {/* <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <i className="bi bi-gear"></i>
                        <span>Configurações</span>
                    </NavLink> */}
                </nav>
            </div>

            <Link to="/projects/create" className="new-project-btn">
                <i className="bi bi-plus-lg"></i>
                Novo Projeto
            </Link>
        </aside>
    );
};

export default Sidebar;