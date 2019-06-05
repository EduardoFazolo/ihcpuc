import React, { Component, CSSProperties } from 'react'
import { Button } from '../../componentes/Button'
import { Input } from '../../componentes/Input'
import Chip from '@material-ui/core/Chip'

const style: { [id: string]: CSSProperties } = {
    divEsq: {
        backgroundColor: '#6F2232',
        width: '350px',
        height: '100%',
        borderRadius: '8px'
    },
    divTags: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 30px 0 30px'
    },
    tag: {
        margin: '4px'
    }
}

export class TagFinder extends Component {
    state = {
        tags: [
            'Festas',
            'Provas',
            'Grupos de estudos',
            'Shows',
            'Palestras',
            'Estagios',
            'Monitoria',
            'Esportes'
        ]
    }
    render() {
        return (
            <div style={style.divEsq}>
                <Input label='Pesquisar' type='search' />
                <div style={style.divTags}>
                    {this.state.tags.map(t => (
                        <Chip label={t} clickable style={style.tag} />
                    ))}
                </div>
            </div>
        )
    }
}
