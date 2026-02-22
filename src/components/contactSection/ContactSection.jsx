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

            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                <input type="hidden" name="access_key" value="d4287c3e-b5e0-4d22-a279-95cc3c057b32" />

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Digite seu Email" 
                    required 
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea 
                    name="message" 
                    id="message" 
                    rows="5" 
                    placeholder="Conte-me sobre seu projeto..." 
                    required
                    ></textarea>
                </div>
                <input type="hidden" name="from_name" value="Portfólio Thearckay" />
                <input type="hidden" name="subject" value="Novo Contato do Site" />

                <button type="submit" className="btn-send">Enviar Mensagem</button>
            </form>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/kayck-arcanjo/" target='_blank'><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/Thearckay" target='_blank'><i className="bi bi-github"></i></a>
            </div>
        </div>
    </section>
    )
}

export default ContactSection
