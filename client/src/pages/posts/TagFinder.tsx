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
            <div style={style.divEsq}>
                <Input
                    label='Pesquisar'
                    type='search'
                    onChange={e => this.setState({ term: e.target.value })}
                />
                <div style={style.divTags}>{this.renderTags()}</div>
            </div>
        )
    }
}
