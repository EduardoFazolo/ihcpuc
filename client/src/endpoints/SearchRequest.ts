import { Request, ServerError } from '../util/Request'
import {
    SearchTagsEntrada,
    SearchTagsSaida,
    GetAllTagsSaida
} from './interfaces/search'

export class SearchRequest {
    static async buscarTags(term: string) {
        let data: SearchTagsEntrada = { term }
        const response: SearchTagsSaida = await Request.get('/searchtags', data)
        if (response.error) throw new ServerError(response.error)
        return response.data
    }
    static async buscarTodasAsTags() {
        const response: GetAllTagsSaida = await Request.get('/searchtags')
        if (response.error) throw new ServerError(response.error)
        return response.data.tags
    }
}
