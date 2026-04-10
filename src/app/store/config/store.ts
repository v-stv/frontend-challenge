import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { baseApi } from '@/shared/api'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})