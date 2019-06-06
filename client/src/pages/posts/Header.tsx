import React, { CSSProperties, Component } from 'react'
import PUCPRLogo from '../../images/pucpr.webp'

const style: { [id: string]: CSSProperties } = {
    container: {
        backgroundColor: '#6F2232',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px'
    },
    title: {
        textAlign: 'center',
        position: 'relative',
        top: '2px',
        width: 'calc(100% - 200px)',
        fontSize: '34px',
        margin: '0px'
    },
    logo: {
        margin: '20px',
        width: '160px'
    }
}
interface Props {
    title?: string
}
export class Header extends Component<Props> {
    render() {
        const { title } = this.props
        return (
            <div style={style.container}>
                <img style={style.logo} src={PUCPRLogo} alt={'xd'} />
                <p style={style.title}> {title}</p>
            </div>
        )
    }
}
