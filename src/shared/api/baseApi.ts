import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        prepareHeaders: (headers) => {
            const apiKey = import.meta.env.VITE_CAT_API_KEY
            if (apiKey) headers.set('x-api-key', apiKey)
            return headers
        }
    }),
    endpoints: () => ({}),
})
