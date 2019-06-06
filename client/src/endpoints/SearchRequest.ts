import { Request, ServerError } from '../util/Request'
import {
    SearchTagsEntrada,
    SearchTagsSaida,
    GetAllTagsSaida
} from './interfaces/search'

export class SearchRequest {
    static buscarTags(term: string) {
        let data: SearchTagsEntrada = { term }
        const response: SearchTagsSaida = Request.get('/searchtags', data)
        if (response.error) throw new ServerError(response.error)
        return response.data
    }
    static buscarTodasAsTags() {
        const response: GetAllTagsSaida = Request.get('/searchtags')
        if (response.error) throw new ServerError(response.error)
        return response.data.tags
    }
}
