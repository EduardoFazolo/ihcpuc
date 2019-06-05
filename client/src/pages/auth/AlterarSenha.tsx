import React, { Component, CSSProperties } from 'react'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Input } from '../../componentes/Input'
import { emailRegex } from '../../util/Patterns';

const style: { [id: string]: CSSProperties } = {
    loginBox: {
        backgroundColor: 'white',
        margin: '0 auto',
        width: '450px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
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
        justifyContent: 'space-around',
    },
    link: {
        textDecoration: 'none'
    }
}
export class AlterarSenha extends Component {
    state = {
        email: '',
        senha_antiga: '',
        senha1: '',
        senha2: ''
    }
    alterarSenha = (): void => {
        const { email, senha_antiga, senha1, senha2 } = this.state
        if (email.match(emailRegex) === null)
            return alert('Email invalido')
        if (senha_antiga.length < 6)
            return alert('A senha precisa ter pelo menos 6 caracteres')
        if (senha1 !== senha2)
            return alert('As senhas não conferem')
        alert('Senha alterada com sucesso!')
    }
    render() {
        return <div style={style.loginBox}>
            <Header title="Alterar Senha" />
            <div style={{ margin: '40px' }}>
                <Input label="Email" type="email" onChange={e => { this.setState({ email: e.target.value }) }} />
                <Input label="Senha antiga" type="password" onChange={e => { this.setState({ senha_antiga: e.target.value }) }} />
                <Input label="Nova Senha" type="password" onChange={e => { this.setState({ senha1: e.target.value }) }} />
                <Input label="Confirmar nova senha" type="password" onChange={e => { this.setState({ senha2: e.target.value }) }} />
                <div style={style.btnContainer}>
                    <Button label="Voltar" path="login" />
                    <Button label="Confirmar" onClick={this.alterarSenha} />
                </div>
            </div>
        </div>
    }
}