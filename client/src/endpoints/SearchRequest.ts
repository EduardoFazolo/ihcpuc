import { Request, ServerError } from '../util/Request'
import { SearchTagsEntrada, SearchTagsSaida } from './interfaces/search'

export class SearchRequest {
    static buscarTags(term: string) {
        let data: SearchTagsEntrada = { term }
        const response: SearchTagsSaida = Request.get('/searchtags', data)
        if (response.error) throw new ServerError(response.error)
        return response.data
    }
}
