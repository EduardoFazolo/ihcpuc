import { ServerError as SV } from '../endpoints/interfaces/auth'

export class Request {
    static async get(path: string, data?: any): Promise<any> {
        const code = `${path}?json=${JSON.stringify(data || {})}`
        const reponse = await fetch(code)
        return reponse.json()
    }
    static async post(path: string, data: any): Promise<any> {
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

async function get(url: string, object: any) {
    const response = await fetch(`${url}?json=${JSON.stringify(object)}`)
    return await response.json()
}
