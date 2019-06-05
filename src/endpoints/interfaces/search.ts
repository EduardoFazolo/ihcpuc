import { Error } from './auth'

//METHOD GET -> /searchtags
/**
 * Buscar tags com base no termo passado
 */
export interface SearchTagsEntrada {
    term: string
}
export interface SearchTagsSaida {
    error?: Error
    data: {
        tags: string[]
    }
}
