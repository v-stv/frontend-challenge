import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FAVORITE_MIN_CARD_HEIGHT, FAVORITE_ROWS_PER_VIEWPORT } from '@/widgets/favoriteCats/config/constants'

export const useFavoriteGridViewport = () => {
    const [listWidth, setListWidth] = useState(0)
    const [viewportHeight, setViewportHeight] = useState(0)
    const listRef = useRef<HTMLElement>(null)

    const measureViewport = () => {
        const listElement = listRef.current
        if (!listElement) return

        const rect = listElement.getBoundingClientRect()
        const topOffsetAtPageStart = Math.min(Math.max(rect.top, 0), window.innerHeight)
        const availableHeight = Math.max(
            window.innerHeight - topOffsetAtPageStart,
            FAVORITE_MIN_CARD_HEIGHT * FAVORITE_ROWS_PER_VIEWPORT,
        )

        setListWidth(rect.width)
        setViewportHeight(availableHeight)
    }

    useLayoutEffect(() => {
        measureViewport()
    }, [])

    useEffect(() => {
        const onResize = () => measureViewport()

        onResize()

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return { listRef, listWidth, viewportHeight }
}
