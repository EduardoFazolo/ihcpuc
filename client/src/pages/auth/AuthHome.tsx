import React, { CSSProperties, Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './Login'
import { Cadastro } from './Subscribe'
import { AlterarSenha } from './AlterarSenha'
import { EsqueciSenha } from './ForgetPassword'
import Background from '../../images/background.jpeg'
import { LoginLocalData } from '../../endpoints/LoginRequest'

const style: { [id: string]: CSSProperties } = {
    container: {
        height: '100%',
        width: '100%'
    },
    content: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: `url(${Background}) no-repeat center center fixed`,
        backgroundSize: 'cover'
    }
}
export class AuthHome extends Component {
    verificarSeEstaLogado() {
        const { nomeCompleto, email } = LoginLocalData
        const target = nomeCompleto || email
        if (target !== '') {
            window.open('posts', '_self')
        }
    }
    render() {
        this.verificarSeEstaLogado()
        return (
            <div style={style.container}>
                <div style={style.content}>
                    <Router>
                        <Route path='/login' component={Login} />
                        <Route path='/cadastro' component={Cadastro} />
                        <Route path='/alterarsenha' component={AlterarSenha} />
                        <Route path='/esquecisenha' component={EsqueciSenha} />
                    </Router>
                </div>
            </div>
        )
    }
}
