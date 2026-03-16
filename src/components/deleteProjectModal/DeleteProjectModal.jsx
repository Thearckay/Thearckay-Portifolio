import React from 'react'
import './DeleteProjectModal.css'

const DeleteProjectModal = ({ isActived, onClose, onDelete}) => {

    if (isActived == null || isActived == '') return null


    return (
        <div className="modal-overlay">
            <div className='delete-project-modal'>
                <button className="close-modal-button" onClick={onClose}>
                    <i className="bi bi-x-lg"></i>
                </button>
                
                <div className="modal-content">
                    <div className="warning-icon">
                        <i className="bi bi-exclamation-triangle"></i>
                    </div>
                    <h2 className='modal-title'>Excluir Projeto?</h2>
                    <p className='modal-sub-title'>Essa ação é permanente e não poderá ser desfeita. Tem certeza?</p>
                </div>

                <div className='modal-buttons-div'>
                    <button className="btn-cancel" onClick={onClose}>Cancelar</button>
                    <button className="btn-delete" onClick={onDelete}>Sim, excluir</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProjectModal