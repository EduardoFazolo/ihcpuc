import React, { CSSProperties, Component } from 'react'
import { LoginLocalData, LoginRequest } from '../../endpoints/LoginRequest'
import { Button } from '../../componentes/Button'
import { ServerError } from '../../util/Request'

const style: { [id: string]: CSSProperties } = {
    container: {
        height: '80%',
        marginRight: '48px',
        borderRadius: '10px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLogoff: {
        width: '120px'
    }
}
export class Logoff extends Component {
    async fazerLogoff() {
        try {
            await LoginRequest.fazerLogout()
            LoginLocalData.email = ''
            LoginLocalData.nomeCompleto = ''
            LoginLocalData.senha = ''
            window.open('/login', '_self')
        } catch (error) {
            if (error instanceof ServerError) {
                alert(error.message)
            } else {
                alert('Erro inesperado!')
            }
        }
    }
    render() {
        const { nomeCompleto, email } = LoginLocalData
        const target = nomeCompleto || email
        if (target === '') throw new Error('Usuario não encontrado')
        return (
            <div style={style.container}>
                Logado como {target}
                <div style={style.btnLogoff}>
                    <Button
                        label='Desconectar'
                        onClick={() => this.fazerLogoff()}
                    />
                </div>
            </div>
        )
    }
}
