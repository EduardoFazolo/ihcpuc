import React, { Component, CSSProperties, ChangeEvent } from 'react'
import { Input } from '../../componentes/Input'
import Chip from '@material-ui/core/Chip'
import { ServerError } from '../../util/Request'
import { timeout, PostList } from './PostList'
import { SearchRequest } from '../../endpoints/SearchRequest'

const tagsExemplos = [
    'Festas',
    'Provas',
    'Grupos de estudos',
    'Shows',
    'Palestras',
    'Estagios',
    'Monitoria',
    'Esportes'
]

const style: { [id: string]: CSSProperties } = {
    container: {
        height: '100%',
        backgroundColor: '#6F2232',
        width: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TagFinder: {
        backgroundColor: 'white',
        height: 'calc(100% - 35px)',
        width: 'calc(100% - 35px)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'ceter',
        justifyContent: 'center'
    },
    title: {
        fontSize: '40px',
        fontWeight: 500
    },
    content: {
        height: 'calc(100% - 30px)',
        width: 'calc(100% - 30px)'
    },
    tag: { margin: '8px' }
}

export class TagFinder extends Component {
    state = {
        tags: [] as string[],
        term: ''
    }
    async componentDidMount() {
        try {
            const tags = tagsExemplos //SearchRequest.buscarTodasAsTags()
            await timeout(2500 * Math.random())
            this.setState({ tags })
        } catch (error) {
            if (error instanceof ServerError) {
                alert(error.message)
            }
        }
    }
    selectTag(tag: string) {
        PostList.filterByTag([tag])
    }
    renderTags() {
        const { tags, term } = this.state
        if (tags.length === 0) {
            return <div>Nenhuma tag por enquanto!</div>
        }
        const filteredTags =
            term === '' ? tags : tags.filter(t => t.match(term))

        return filteredTags.map((t, i) => (
            <Chip
                key={i}
                label={t}
                clickable
                style={style.tag}
                onClick={() => this.selectTag(t)}
            />
        ))
    }
    render() {
        return (
            <div style={style.container}>
                <div style={style.TagFinder}>
                    <div style={style.content}>
                        <div style={style.title}>Tags:</div>
                        <Input label='Filtro' />
                        {this.renderTags()}
                    </div>
                </div>
            </div>
        )
    }
}
