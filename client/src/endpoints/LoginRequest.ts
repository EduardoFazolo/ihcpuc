import { Request, ServerError } from '../util/Request'
import {
    LoginEntrada,
    LoginSaida,
    LogoffEntrada,
    LogoffSaida
} from './interfaces/auth'

class LoginLocalData {
    static set email(value: string) {
        localStorage.setItem('email', JSON.stringify(value))
    }
    static get email() {
        return JSON.stringify(localStorage.getItem('email') || '""')
    }
    static set senha(value: string) {
        localStorage.setItem('senha', JSON.stringify(value))
    }
    static get senha() {
        return JSON.stringify(localStorage.getItem('senha') || '""')
    }
    static set nomeCompleto(value: string) {
        localStorage.setItem('nomeCompleto', JSON.stringify(value))
    }
    static get nomeCompleto() {
        return JSON.stringify(localStorage.getItem('nomeCompleto') || '""')
    }
}
export class LoginRequest {
    static fazerLogin(email: string, password: string) {
        const data: LoginEntrada = { email, password }
        const response: LoginSaida = Request.post('/login', data)
        if (response.error) throw new ServerError(response.error)
        return response.data
    }
    static fazerLogout() {
        const { email } = LoginLocalData
        const data: LogoffEntrada = { email }
        const response: LogoffSaida = Request.post('/logoff', data)
        if (response.error) throw new ServerError(response.error)
    }
}
