import React, { CSSProperties, Component } from 'react'
import { Button } from '../../componentes/Button'
import { Post as PostDto } from '../../endpoints/interfaces/post'
import { ServerError } from '../../util/Request'
import { LoginRequest } from '../../endpoints/LoginRequest'
import { PostRequest } from '../../endpoints/PostRequest'
import { Input } from '../../componentes/Input'
import { PostList } from './PostList'

const style: { [id: string]: CSSProperties } = {
    container: {
        width: '90%',
        backgroundColor: 'yellow',
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
        justifyContent: 'flex-end'
    },
    title: {
        fontWeight: 750,
        fontSize: '30px'
    }
}

export class EditPost extends Component<PostDto> {
    state = {
        title: '',
        content: ''
    }
    async enviarPost() {
        try {
            const { title, content } = this.state
            await PostRequest.criarPost(title, content)
            PostList.refreshPostLists()
        } catch (error) {
            if (error instanceof ServerError) {
                alert(error.message)
            } else {
                alert('Erro inesperado!')
            }
        }
    }
    render() {
        return (
            <div style={style.container}>
                <div style={style.subContainer}>
                    <div style={style.header}>
                        <div>
                            <Input
                                label='Titulo'
                                onChange={e =>
                                    this.setState({ title: e.target.value })
                                }
                            />
                        </div>
                        <div style={style.bottomBar}>
                            <div
                                style={{ width: '100px', marginRight: '25px' }}
                            >
                                {' '}
                                <Button
                                    label='Enviar'
                                    onClick={() => this.enviarPost()}
                                />{' '}
                            </div>
                        </div>
                    </div>
                    <Input
                        label='Novo post'
                        lines={4}
                        onChange={e =>
                            this.setState({ content: e.target.value })
                        }
                    />
                </div>
            </div>
        )
    }
}
