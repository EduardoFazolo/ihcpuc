import React, { Component, CSSProperties } from 'react'
import { Button } from '../../componentes/Button'
import { Input } from '../../componentes/Input'
import Chip from '@material-ui/core/Chip'

const style: { [id: string]: CSSProperties } = {
    divDir: {
        backgroundColor: '#6F2232',
        width: 'calc(100% - 350px)',
        height: '100%',
        borderRadius: '8px',
        marginLeft: '3px'
    },
    divMakePost: {
        backgroundColor: 'yellow',
        height: '10%',
        margin: '8px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    divBotaoConfirmar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px'
    }
}

export class PostList extends Component {
    confirmarPost = (): void => {
        alert('Post Enviado')
    }
    render() {
        return (
            <div style={style.divDir}>
                <div style={style.divMakePost}>
                    <Input label='Crie um post' type='text' />
                    <div style={style.divBotaoConfirmar}>
                        <Button
                            label='Confirmar'
                            onClick={this.confirmarPost}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
