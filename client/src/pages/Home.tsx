import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthHome } from './auth/AuthHome'
import { PostHome } from './posts/PostHome'

export class Home extends Component {
    render() {
        return (
            <Router>
                <Route path='/listaDePosts' component={PostHome} />
                <Route path='/login' component={AuthHome} />
            </Router>
        )
    }
}
