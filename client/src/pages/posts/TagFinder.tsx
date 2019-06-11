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
        width: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagFinder: {
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
        fontWeight: 500,
        textAlign: 'center'
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
            term === ''
                ? tags
                : tags.filter(t => t.toLowerCase().match(term.toLowerCase()))

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
                <div style={style.tagFinder}>
                    <div style={style.content}>
                        <div style={style.title}>Tags</div>
                        <Input
                            label='Buscar'
                            onChange={e =>
                                this.setState({ term: e.target.value })
                            }
                        />
                        {this.renderTags()}
                    </div>
                </div>
            </div>
        )
    }
}
