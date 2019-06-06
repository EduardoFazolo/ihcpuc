import { ServerError as SV } from '../endpoints/interfaces/auth'

export class Request {
    static get(path: string, data?: any): any {
        return {}
    }
    static post(path: string, data: any): any {
        return {}
    }
}
export class ServerError extends Error {
    id: number

    constructor(data: SV) {
        super(data.message)
        this.id = data.id
    }
}
