import React, { CSSProperties, Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from '../login/Login';
import { Cadastro } from '../cadastro/Cadastro';
import { AlterarSenha } from '../alterarsenha/AlterarSenha'
import { EsqueciSenha } from '../esquecisenha/EsqueciSenha'
import Background from '../../images/background.jpeg'
import { ListaDePost } from './ListaDePost';
import { AuthHome} from '../home/Home'

export class Home extends Component {
    render() {
        return  <Router>
                    <Route path="/listaDePosts" component={ListaDePost} />
                    <Route path="/login" component={AuthHome} />
                </Router>
    }
}