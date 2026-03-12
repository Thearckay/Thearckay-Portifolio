import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <section className='login-page'>
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

                <form action="" className='login-form'>
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
                    <div className='login-input-checkbox-wrapper' >
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Lembrar-me</label>
                    </div>

                    <button type='submit' className='login-form-button'>Entrar</button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage