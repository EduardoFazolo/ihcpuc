import { Request, ServerError } from '../util/Request'
import {
    LoginEntrada,
    LoginSaida,
    LogoffEntrada,
    LogoffSaida
} from './interfaces/auth'

function getLocalStorageData(propertyId: string) {
    return JSON.parse(localStorage.getItem(propertyId) || '""')
}
function setLocalStorageData(propertyId: string, value: any) {
    localStorage.setItem(propertyId, JSON.stringify(value))
}

export class LoginLocalData {
    static set email(value: string) {
        setLocalStorageData('email', value)
    }
    static get email() {
        return getLocalStorageData('email')
    }
    static set senha(value: string) {
        setLocalStorageData('senha', value)
    }
    static get senha() {
        return getLocalStorageData('senha')
    }
    static set nomeCompleto(value: string) {
        setLocalStorageData('nomeCompleto', value)
    }
    static get nomeCompleto() {
        return getLocalStorageData('nomeCompleto')
    }
}
export class LoginRequest {
    static async fazerLogin(email: string, password: string) {
        const data: LoginEntrada = { email, password }
        const response: LoginSaida = await Request.post('/login', data)
        if (response.error) throw new ServerError(response.error)
        return response.data
    }
    static async fazerLogout() {
        const { email } = LoginLocalData
        const data: LogoffEntrada = { email }
        const response: LogoffSaida = await Request.post('/logoff', data)
        if (response.error) throw new ServerError(response.error)
    }
}
