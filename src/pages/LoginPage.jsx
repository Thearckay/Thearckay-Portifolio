import React, { useState } from 'react'
import './LoginPage.css'
import { loginHandlerApiConnection } from '../api/api'
import Notification from '../components/notification/Notification'

const LoginPage = () => {

    const [tittleNotification, setTittleNotification] = useState('')
    const [messageNotification, setMessageNotification] = useState('')

    const [notification, setNotification] = useState(true)

    const closeNotification = () => {
        setNotification(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formaData = new FormData(e.target)
        const data = Object.fromEntries(formaData)
        const jsonToLogin = JSON.stringify(data)

        const response = await loginHandlerApiConnection(jsonToLogin)
        if (response.data && response.data[0].token) {
            setMessageNotification(response.message)
            setTittleNotification('Sucesso!')
            setNotification(true)
            localStorage.setItem('token', response.data[0].token)
            setTimeout(() => {
                setNotification(false)
                window.location.href = '/projects'
            }, 2000);
            
        } else {
            setMessageNotification(response.message)
            setTittleNotification('Erro!')
            setNotification(true)
                setTimeout(() => {
                    setNotification(false)
                }, 2000);
        }
    
    }

    return (
        <section className='login-page'>
            {notification && (
                <Notification 
                    message={messageNotification} 
                    title={tittleNotification} 
                    onClose={closeNotification} 
                    type='success' 
                    key={()=> Date.now()}
                />
            )}
            <div className='login-left-side'>
                <div className='login-image-background'>
                    <span>Painel</span>
                    <h1>Thearckay</h1>
                </div>
            </div>
            <div className='login-right-side'>
                <p className='login-instagram-span'>@Thearckay</p>
                <h1 className='login-rigth-tittle'>Acesso <br /> Administrativo</h1>
                <p>Área restira para gestão do Portifólio</p>

                <form action="" className='login-form' onSubmit={(e)=> handleSubmit(e)}>
                    <div className='login-input-label'>
                        <label htmlFor="email">E-mail</label>
                        <div className='login-input-wrapper'>
                            <input type="email" id="email" name='email'/>
                        </div>
                    </div>
                    <div className='login-input-label'>
                        <label htmlFor="password">Senha</label>
                        <div className='login-input-wrapper'>
                            <input type="password" id="password" name='password'/>
                        </div>
                    </div>
                    {/* <div className='login-input-checkbox-wrapper' >
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Lembrar-me</label>
                    </div> */}

                    <button type='submit' className='login-form-button'>Entrar</button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage