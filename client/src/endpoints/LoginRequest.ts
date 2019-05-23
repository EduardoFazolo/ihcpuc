import { Request, Response, ServerError } from "../util/Request";

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
    static fazerLogin(email: string, senha: string) {
        const data = { email, senha }
        const response: Response = Request.post('', data)
        if (response.erro)
            throw new ServerError(response.erro)
        return response
    }
    static fazerLogout() {
        const { email } = LoginLocalData
        const data = { email }
        const response: Response = Request.post('', data)
        if (response.erro)
            throw new ServerError(response.erro)
        return response
    }
}