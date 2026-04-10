export type BuildParams = (params: CatParams) => QueryParams

export interface Cat {
    id: string
    url: string
    width: number
    height: number
}

export type CatsApiResponse = Cat[]

export interface CatParams {
    limit?: number
    page?: number
}

export interface QueryParams {
    limit?: number
    page?: number
}
