import { ServerError } from './auth'

//METHOD GET -> /getalltags
/**
 * Buscar todas as tags
 */
export interface GetAllTagsEntrada {}
export interface GetAllTagsSaida {
    error?: ServerError
    data: {
        tags: string[]
    }
}

//METHOD GET -> /searchtags
/**
 * Buscar tags com base no termo passado
 */
export interface SearchTagsEntrada {
    term: string
}
export interface SearchTagsSaida {
    error?: ServerError
    data: {
        tags: string[]
    }
}
