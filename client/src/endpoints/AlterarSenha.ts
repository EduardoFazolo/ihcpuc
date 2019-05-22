import { Request, Response, ServerError } from "../util/Request";

export class AlterarSenhaRequest {
    static alterarSenha( email: string, senha: string) {
        const data = { email, senha }
        const response: Response = Request.post('', data)
        if (response.erro)
            throw new ServerError(response.erro)
    }
}

