import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Cat } from './types'

export interface CatCatalogState {
    cats: Cat[]
    page: number
    hasMore: boolean
}

const initialState: CatCatalogState = {
    cats: [],
    page: 0,
    hasMore: true,
}

const catCatalogSlice = createSlice({
    name: 'catCatalog',
    initialState,
    reducers: {
        setCatCatalogState: (_, action: PayloadAction<CatCatalogState>) => action.payload,
    },
})

export const { setCatCatalogState } = catCatalogSlice.actions
export const catCatalogReducer = catCatalogSlice.reducer
