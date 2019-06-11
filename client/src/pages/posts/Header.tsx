import React, { CSSProperties, Component } from 'react'
import PUCPRLogo from '../../images/pucpr.webp'
import { Logoff } from './Logoff'

const style: { [id: string]: CSSProperties } = {
    container: {
        height: '80px',
        color: 'white',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
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
                <div style={style.title}> {title}</div>
                <Logoff />
            </div>
        )
    }
}
