import type { Cat } from '@/entities/cat/model/types'
import { useLocalStorage } from '@/shared/lib/hooks/useLocalStorage'

export const useFavoriteCats = () => {
    const [favoriteCats, setFavoriteCats] = useLocalStorage<Cat[]>('favorite-cats', [])
    const favoriteCatIds = new Set(favoriteCats.map(({ id }) => id))

    const toggleFavoriteCat = (cat: Cat) => {
        setFavoriteCats((currentFavoriteCats) => {
            const isAlreadyFavorite = currentFavoriteCats.some(({ id }) => id === cat.id)

            return isAlreadyFavorite
                ? currentFavoriteCats.filter(({ id }) => id !== cat.id)
                : [...currentFavoriteCats, cat]
        })
    }

    return { favoriteCats, favoriteCatIds, toggleFavoriteCat }
}
