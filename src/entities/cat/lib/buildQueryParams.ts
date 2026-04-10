import type { BuildParams, QueryParams } from '../model/types'

export const buildQueryParams: BuildParams = (params) => {
    const { limit, page } = params

    const queryParams: QueryParams = {}

    if (limit !== undefined) queryParams.limit = limit
    if (page !== undefined) queryParams.page = page

    return queryParams
}
