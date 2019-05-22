
export class Request {
    static get(path: string, data: any): any {
        return {}
    }
    static post(path: string, data: any): any {
        return {}
    }
}
interface ErrorDTO {
    mensagem: string
    id: number
}
export interface Response {
    erro?: ErrorDTO
}
export class ServerError extends Error {
    id: number

    constructor(data: ErrorDTO) {
        super(data.mensagem)
        this.id = data.id
    }
}