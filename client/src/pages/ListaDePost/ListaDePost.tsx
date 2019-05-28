import React, { Component, CSSProperties } from 'react'
import { Header } from '../../componentes/Header'
import { Button } from '../../componentes/Button'
import { Input } from '../../componentes/Input'
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import { emailRegex } from '../../util/Patterns';

const style: { [id: string]: CSSProperties } = {
    container:{
        backgroundColor: 'grey',
        height:'100%',
        padding: '10px',
        display: 'flex'
    },
    divEsq: {
        backgroundColor: '#6F2232',
        width: '350px',
        height: '100%',
        borderRadius: '8px'
    },
    divDir: {
        backgroundColor: '#6F2232',
        width:'calc(100% - 350px)',
        height: '100%',
        borderRadius: '8px',
        marginLeft: '3px' 
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

export class ListaDePost extends Component {
    state={
        tags: ["Festas", "Provas", "Grupos de estudos", "Shows", "Palestras", "Estagios", "Monitoria", "Esportes"]
    }
    render() {
        return <div style={style.container}>
            <div style={style.divEsq}>
                <Input label="Pesquisar" type="search"></Input>
                <div style={style.divTags}>
                    {this.state.tags.map(t=> <Chip  label={t} clickable style={style.tag}/>)}
                </div>
            </div>            
            <div style={style.divDir}></div>
        </div>
    }
}