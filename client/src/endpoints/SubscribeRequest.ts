import { Request, ServerError } from '../util/Request'
import {
    SubscribeEntrada,
    SubscribeSaida,
    ChangePasswordEntrada,
    ChangePasswordSaida,
    ForgotPasswordEntrada,
    ForgotPasswordSaida
} from './interfaces/auth'

export class CadastroRequest {
    static fazerCadastro(
        name: string,
        lastName: string,
        email: string,
        password: string
    ) {
        const data: SubscribeEntrada = {
            name,
            lastName: lastName,
            email,
            password
        }
        const response: SubscribeSaida = Request.post('/subscribe', data)
        if (response.error) throw new ServerError(response.error)
    }
    static esqueciMinhaSenha(email: string) {
        const data: ForgotPasswordEntrada = { email }
        const response: ForgotPasswordSaida = Request.post(
            '/forgotpassword',
            data
        )
        if (response.error) throw new ServerError(response.error)
    }
    static alterarSenha(email: string, password: string, newPassword: string) {
        const data: ChangePasswordEntrada = { email, password, newPassword }
        const response: ChangePasswordSaida = Request.post(
            '/changepassword',
            data
        )
        if (response.error) throw new ServerError(response.error)
    }
}
