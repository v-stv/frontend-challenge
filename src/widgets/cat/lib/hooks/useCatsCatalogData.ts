import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCatCatalogState, useFetchCatsQuery } from '@/entities/cat'
import type { Cat, CatsApiResponse } from '@/entities/cat'
import type { AppDispatch, RootState } from '@/app/store/config/types'
import { CAT_COLUMNS, CAT_LOAD_MORE_THRESHOLD_ROWS, CAT_PAGE_SIZE } from '@/widgets/cat/config/constants'

interface RenderedCellsRange {
    columnStartIndex: number
    columnStopIndex: number
    rowStartIndex: number
    rowStopIndex: number
}

const getCatsFromResponse = (response: CatsApiResponse): Cat[] => {
    if (Array.isArray(response)) return response
    return []
}

export const useCatsCatalogData = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { cats, page, hasMore } = useSelector((state: RootState) => state.catCatalog)
    const fetchTriggerLockedRef = useRef(false)

    const { data, isFetching, isError } = useFetchCatsQuery(
        { limit: CAT_PAGE_SIZE, page },
        { skip: !hasMore && cats.length > 0 },
    )
    const rowCount = Math.max(Math.ceil(cats.length / CAT_COLUMNS), 1)

    useEffect(() => {
        if (!data) return

        const nextCats = getCatsFromResponse(data)
        const uniqueCats = new Set(cats.map(({ id }) => id))
        const filteredCats = nextCats.filter(({ id }) => !uniqueCats.has(id))
        const nextHasMore = nextCats.length >= CAT_PAGE_SIZE

        if (filteredCats.length === 0 && hasMore === nextHasMore) return

        dispatch(
            setCatCatalogState({
                cats: [...cats, ...filteredCats],
                page,
                hasMore: nextHasMore,
            }),
        )
    }, [cats, data, dispatch, hasMore, page])

    useEffect(() => {
        if (!isError) return

        dispatch(setCatCatalogState({ cats, page, hasMore: false }))
    }, [cats, dispatch, isError, page])

    useEffect(() => {
        if (data || isError) {
            fetchTriggerLockedRef.current = false
        }
    }, [data, isError])

    const handleCellsRendered = (_visibleCells: RenderedCellsRange, allCells: RenderedCellsRange) => {
        const reachedLoadThreshold = allCells.rowStopIndex >= rowCount - 1 - CAT_LOAD_MORE_THRESHOLD_ROWS

        if (reachedLoadThreshold && !isFetching && hasMore && !fetchTriggerLockedRef.current) {
            fetchTriggerLockedRef.current = true

            dispatch(
                setCatCatalogState({
                    cats,
                    page: page + 1,
                    hasMore,
                }),
            )
        }
    }

    return { cats, rowCount, isFetching, isError, handleCellsRendered }
}
