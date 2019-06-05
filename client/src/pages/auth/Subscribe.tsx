import React, { Component, CSSProperties } from 'react'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Input } from '../../componentes/Input'
import { nomeRegex, emailRegex } from '../../util/Patterns'
import { CadastroRequest } from '../../endpoints/SubscribeRequest'

const style: { [id: string]: CSSProperties } = {
    loginBox: {
        backgroundColor: 'white',
        margin: '0 auto',
        width: '450px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        padding: '0 0 50px 0'
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
    row: {
        display: 'flex',
        margin: '15px 40px 0 40px',
        justifyContent: 'space-around'
    },
    link: {
        textDecoration: 'none'
    }
}
export class Cadastro extends Component {
    state = {
        nome: '',
        sobreNome: '',
        email: '',
        senha1: '',
        senha2: ''
    }
    enviarCadastro = (): void => {
        const { nome, sobreNome, email, senha1, senha2 } = this.state
        if (nome.match(nomeRegex) === null) return alert('Nome invalido')
        if (sobreNome.match(nomeRegex) === null)
            return alert('Sobrenome invalido')
        if (email.match(emailRegex) === null) return alert('Email invalido')
        if (senha1.length < 6)
            return alert('A senha precisa ter pelo menos 6 caracteres')
        if (senha1 !== senha2) return alert('As senhas não conferem')
        CadastroRequest.fazerCadastro(nome, sobreNome, email, senha1)
        alert('Cadastro concluído com sucesso!')
        window.open('login', '_self')
    }
    render() {
        return (
            <div style={style.loginBox}>
                <Header title='  Cadastro' />
                <div style={style.row}>
                    <Input
                        label='Nome'
                        type='name'
                        onChange={e => {
                            this.setState({ nome: e.target.value })
                        }}
                    />
                    <Input
                        label='Sobrenome'
                        type='lastname'
                        onChange={e => {
                            this.setState({ sobreNome: e.target.value })
                        }}
                    />
                </div>
                <div style={style.row}>
                    <Input
                        label='Email'
                        type='email'
                        onChange={e => {
                            this.setState({ email: e.target.value })
                        }}
                    />
                </div>
                <div style={style.row}>
                    <Input
                        label='Senha'
                        type='password'
                        onChange={e => {
                            this.setState({ senha1: e.target.value })
                        }}
                    />
                    <Input
                        label='Confirmar senha'
                        type='password'
                        onChange={e => {
                            this.setState({ senha2: e.target.value })
                        }}
                    />
                </div>
                <div style={style.row}>
                    <Button label='Voltar' path='login' />
                    <Button label='Enviar' onClick={this.enviarCadastro} />
                </div>
            </div>
        )
    }
}
