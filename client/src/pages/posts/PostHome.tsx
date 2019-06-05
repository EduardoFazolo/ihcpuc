import React, { Component, CSSProperties } from 'react'
import { TagFinder } from './TagFinder'
import { PostList } from './PostList'

const style: { [id: string]: CSSProperties } = {
    container: {
        backgroundColor: 'grey',
        height: '100%',
        padding: '10px',
        display: 'flex'
    }
}

export class PostHome extends Component {
    render() {
        return (
            <div style={style.container}>
                <TagFinder />
                <PostList />
            </div>
        )
    }
}
