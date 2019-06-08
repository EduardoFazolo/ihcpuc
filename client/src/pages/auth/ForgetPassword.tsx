import React, { Component, CSSProperties } from 'react'
import { Header } from './Header'
import { Button } from '../../componentes/Button'
import { Input } from '../../componentes/Input'
import { emailRegex } from '../../util/Patterns'

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
    },
    texto: {
        textAlign: 'center',
        fontSize: '20px'
    }
}
export class EsqueciSenha extends Component {
    state = {
        email: ''
    }
    alterarSenha = (): void => {
        const { email } = this.state
        if (email.match(emailRegex) === null) return alert('Email invalido')
        alert('Senha enviada para o email: ' + email)
    }
    render() {
        return (
            <div style={style.loginBox}>
                <Header title='Esqueci minha senha' />
                <div style={style.texto}>
                    {' '}
                    Digite o Email para recuperar a senha{' '}
                </div>
                <div style={{ margin: '40px' }}>
                    <Input
                        label='Email'
                        type='search'
                        onChange={e => {
                            this.setState({ email: e.target.value })
                        }}
                    />
                    <div style={style.btnContainer}>
                        <Button label='Voltar' path='login' />
                        <Button label='Confirmar' onClick={this.alterarSenha} />
                    </div>
                </div>
            </div>
        )
    }
}
