import React, { CSSProperties, Component } from 'react'
import { Button } from '../../componentes/Button'
import { Post as PostDto } from '../../endpoints/interfaces/post'
import { ServerError } from '../../util/Request'
import { LoginRequest } from '../../endpoints/LoginRequest'
import { PostRequest } from '../../endpoints/PostRequest'

const style: { [id: string]: CSSProperties } = {
    container: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        margin: '20px 0 20px 0'
    },
    subContainer: {
        height: 'calc(100% - 40px)',
        width: 'calc(100% - 40px)',
        margin: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        flexDirection: 'column'
    },
    content: {
        marginLeft: '30px'
    },
    bottomBar: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontWeight: 750,
        fontSize: '30px'
    }
}

export class Post extends Component<PostDto> {
    async darLike() {
        try {
            const { _id } = this.props
            await PostRequest.likePost(_id)
        } catch (error) {
            if (error instanceof ServerError) {
                alert(error.message)
            }
        }
    }
    render() {
        const { title, content, likesNumber, authorName } = this.props
        return (
            <div style={style.container}>
                <div style={style.subContainer}>
                    <div style={style.header}>
                        <div>
                            <div style={style.title}>{title}</div>
                            <div>{authorName}</div>
                        </div>
                        <div style={style.bottomBar}>
                            <div>{likesNumber} likes nesse post</div>
                            <div style={{ width: '100px' }}>
                                {' '}
                                <Button
                                    label='like'
                                    onClick={this.darLike}
                                />{' '}
                            </div>
                        </div>
                    </div>
                    <div style={style.content}>{content}</div>
                </div>
            </div>
        )
    }
}
