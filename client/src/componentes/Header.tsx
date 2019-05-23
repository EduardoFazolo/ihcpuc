import React, { CSSProperties, Component } from 'react'
import PUCPRLogo from '../images/pucpr.webp'

const style: { [id: string]: CSSProperties } = {
    header: {
        backgroundColor: '#6F2232',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px 8px 0 0',
        marginBottom: '20px'
    },
    title: {
        textAlign: 'center',
        position: 'relative',
        left: '-20px',
        top: '2px',
        width: 'calc(100% - 200px)',
        fontSize: '34px',
        margin: '0px',
    },
    logo: {
        margin: '20px',
        width: '160px',
    }
}
interface Props {
    title?: string
}
export class Header extends Component<Props> {
    render() {
        const { title } = this.props
        return <div style={style.header}>
            <img style={style.logo} src={PUCPRLogo} alt={"xd"}/>
            <p style={style.title} > {title}</p>
        </div>
    }
}