import React, { Component, CSSProperties } from 'react'
import { Post } from './Post'
import { Post as PostDto } from '../../endpoints/interfaces/post'
import { PostRequest } from '../../endpoints/PostRequest'
import { ServerError } from '../../util/Request'
import { EditPost } from './EditPost'

const exemploDePosts = [
    {
        _id: '0xID',
        title: 'Post Test 01',
        content: '#churras Proximo sabado 18/05 #enoix',
        likesNumber: 5,
        authorName: 'Scalabresa'
    },
    {
        _id: '0xID',
        title: 'Post Test 02',
        content:
            '#churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix',
        likesNumber: 15,
        authorName: 'Scalabresa'
    },
    {
        _id: '0xID',
        title: 'Post Test 03',
        content:
            '#churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix',
        likesNumber: 15,
        authorName: 'Scalabresa'
    },
    {
        _id: '0xID',
        title: 'Post Test 01',
        content:
            '#churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix',
        likesNumber: 5,
        authorName: 'Scalabresa'
    },
    {
        _id: '0xID',
        title: 'Post Test 02',
        content:
            '#churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix',
        likesNumber: 15,
        authorName: 'Scalabresa'
    },
    {
        _id: '0xID',
        title: 'Post Test 03',
        content:
            '#churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix #churras Proximo sabado 18/05 #enoix',
        likesNumber: 15,
        authorName: 'Scalabresa'
    }
]

export function timeout(ms: number) {
    return new Promise(r => setTimeout(r, ms))
}

const style: { [id: string]: CSSProperties } = {
    divDir: {
        backgroundColor: '#6F2232',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    divMakePost: {
        flex: 1,
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    divBotaoConfirmar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px'
    },
    postsContainer: {
        flex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll'
    }
}

export class PostList extends Component {
    static mainList?: PostList

    static async refreshPostLists() {
        if (PostList.mainList !== undefined) {
            try {
                const { tags } = PostList.mainList.state
                const posts = exemploDePosts //PostRequest.buscarPosts(tags)
                await timeout(2500 * Math.random())
                PostList.mainList.setState({ posts })
            } catch (error) {
                if (error instanceof ServerError) {
                    alert(error.message)
                }
            }
        }
    }
    static filterByTag(tags: string[]) {
        if (PostList.mainList !== undefined) {
            PostList.mainList.setState({ tags })
            PostList.refreshPostLists()
        }
    }

    state = {
        tags: [] as string[],
        posts: [] as PostDto[]
    }

    componentDidMount() {
        PostList.mainList = this
        PostList.refreshPostLists()
    }
    confirmarPost = (): void => {
        alert('Post Enviado')
    }
    render() {
        const { posts } = this.state
        return (
            <div style={style.divDir}>
                <div className='activeOnHover' style={style.divMakePost}>
                    <EditPost {...exemploDePosts[0]} />
                </div>
                <div style={style.postsContainer}>
                    {posts.length === 0 ? (
                        <div>Nenhum post por enquanto!</div>
                    ) : (
                        posts.map(p => <Post {...p} />)
                    )}
                </div>
            </div>
        )
    }
}
