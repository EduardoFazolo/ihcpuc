import React, { Component, CSSProperties } from 'react'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Input } from '../../componentes/Input'
import { Link, withRouter } from 'react-router-dom'
import { emailRegex } from '../../util/Patterns'
import { LoginRequest } from '../../endpoints/LoginRequest'
import { ServerError } from '../../util/Request'

const style: { [id: string]: CSSProperties } = {
    loginBox: {
        backgroundColor: 'white',
        margin: '0 auto',
        width: '450px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
    },
    btnContainer: {
        width: '100%',
        display: 'flex',
        margin: '25px 0 25px 0',
        justifyContent: 'space-around'
    },
    linkContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    link: {
        textDecoration: 'none'
    }
}

export class Login extends Component {
    state = {
        email: '',
        senha: ''
    }
    fazerLogin = (): void => {
        const { email, senha } = this.state
        if (email.match(emailRegex) === null) return alert('Email invalido')
        if (senha.length < 6)
            return alert('A senha precisa ter pelo menos 6 caracteres')
        try {
            LoginRequest.fazerLogin(email, senha)
            alert('Login feito com sucesso!')
        } catch (error) {
            if (error instanceof ServerError) {
                alert(error.message)
            } else {
                alert('Erro inesperado!')
            }
        }
    }
    render() {
        return (
            <div style={style.loginBox}>
                <Header title='Login' />
                <div style={{ margin: '40px' }}>
                    <Input
                        label='Email'
                        type='email'
                        onChange={e => {
                            this.setState({ email: e.target.value })
                        }}
                    />
                    <Input
                        label='Senha'
                        type='password'
                        onChange={e => {
                            this.setState({ senha: e.target.value })
                        }}
                    />
                    <div style={style.btnContainer}>
                        <Button label='Cadastrar' path='cadastro' />
                        <Button label='Login' onClick={this.fazerLogin} />
                    </div>
                    <div style={style.linkContainer}>
                        <Link to='/esquecisenha'>Esqueci minha senha</Link>
                        <Link to='/alterarsenha'>Alterar senha</Link>
                    </div>
                </div>
            </div>
        )
    }
}
