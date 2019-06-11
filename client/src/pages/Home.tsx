import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthHome } from './auth/AuthHome'
import { PostHome } from './posts/PostHome'
import { LoginLocalData } from '../endpoints/LoginRequest'

const routes = {
    login: '/login',
    posts: '/posts'
}

export class Home extends Component {
    verificarSeEstaLogado() {
        const { nomeCompleto, email } = LoginLocalData
        const userLogged = (nomeCompleto || email) !== ''
        if (!userLogged && window.location.pathname !== routes.login) {
            window.open(routes.login, '_self')
        } else if (userLogged && window.location.pathname !== routes.posts) {
            window.open(routes.posts, '_self')
        }
    }
    render() {
        this.verificarSeEstaLogado()
        return (
            <Router>
                <Route path='/posts' component={PostHome} />
                <Route path='/login' component={AuthHome} />
            </Router>
        )
    }
}
