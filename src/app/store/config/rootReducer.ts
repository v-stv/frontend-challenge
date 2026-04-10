import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api'
import { catCatalogReducer } from '@/entities/cat'

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    catCatalog: catCatalogReducer,
})
