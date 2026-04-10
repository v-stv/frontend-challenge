import type { CatParams, CatsApiResponse } from '../model/types'
import { CatApiUrl } from '../config/urlApi'
import { buildQueryParams } from '../lib/buildQueryParams'
import { baseApi } from '@/shared/api'

export const catApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchCats: builder.query<CatsApiResponse, CatParams>({
            query: (params) => ({
                url: CatApiUrl.ALL_CATS,
                params: buildQueryParams(params),
            }),
        }),
    }),
})

export const { useFetchCatsQuery } = catApi
