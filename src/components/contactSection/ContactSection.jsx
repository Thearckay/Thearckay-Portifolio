import React from 'react'
import './ContactSection.css'

const ContactSection = () => {
    return (
    <section className="contact-section">
        <div className="contact-container">
            <div className="contact-header">
            <h2 className="contact-title">Vamos criar algo <span>extraordinário</span></h2>
            <p>Se você tem uma pergunta ou apenas quer dizer olá, minha caixa de entrada está sempre aberta.</p>
            </div>

            <form className="contact-form">
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu Email" required />
            </div>

            <div className="input-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" rows="5" placeholder="Conte-me sobre seu projeto..." required></textarea>
            </div>

            <button type="submit" className="btn-send">Enviar Mensagem</button>
            </form>

            <div className="social-links">
            <a href="www.linkedin.com/in/kayck-arcanjo/" target='_blank'><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/Thearckay" target='_blank'><i className="bi bi-github"></i></a>
            </div>
        </div>
    </section>
    )
}

export default ContactSection
