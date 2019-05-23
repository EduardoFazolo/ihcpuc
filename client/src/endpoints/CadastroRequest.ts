import { Request, Response, ServerError } from "../util/Request";

export class CadastroRequest {
    static fazerCadastro(nome: string, sobrenome: string, email: string, senha: string) {
        const data = { nome, sobrenome, email, senha }
        const response: Response = Request.post('', data)
        if (response.erro)
            throw new ServerError(response.erro)
    }
}

