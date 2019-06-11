import React, { Component, CSSProperties } from 'react'
import { TagFinder } from './TagFinder'
import { PostList } from './PostList'
import { Header } from './Header'
import { LoginLocalData } from '../../endpoints/LoginRequest'

const style: { [id: string]: CSSProperties } = {
    superContainer: {
        backgroundColor: '#6F2232',
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    },
    container: {
        height: '100%',
        width: '100%',
        maxWidth: '1500px'
    },
    content: {
        display: 'flex',
        height: 'calc(100% - 80px)'
    }
}

export class PostHome extends Component {
    verificarSeEstaLogado() {
        const { nomeCompleto, email } = LoginLocalData
        const target = nomeCompleto || email
        if (target === '') {
            window.open('login', '_self')
        }
    }
    render() {
        this.verificarSeEstaLogado()
        return (
            <div style={style.superContainer}>
                <div style={style.container}>
                    <Header title='Forum da PUC' />
                    <div style={style.content}>
                        <TagFinder />
                        <PostList />
                    </div>
                </div>
            </div>
        )
    }
}
