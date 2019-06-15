import React, { Component, CSSProperties } from 'react'
import { TagFinder } from './TagFinder'
import { PostList } from './PostList'
import { Header } from './Header'
import { LoginLocalData } from '../../endpoints/LoginRequest'

/*
paleta:
post: e04053
fundo: f4f2f2
    434343
*/

const style: { [id: string]: CSSProperties } = {
    superContainer: {
        backgroundColor: '#f4f2f2',
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
    render() {
        return (
            <div style={style.superContainer}>
                <div style={style.container}>
                    <Header title='eVOX' />
                    <div style={style.content}>
                        <TagFinder />
                        <PostList />
                    </div>
                </div>
            </div>
        )
    }
}
