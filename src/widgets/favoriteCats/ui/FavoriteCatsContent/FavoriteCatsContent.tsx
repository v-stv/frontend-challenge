import { useFavoriteCats } from '@/entities/cat'
import { useFavoriteGridViewport } from '@/widgets/favoriteCats/lib/hooks/useFavoriteGridViewport'
import FavoriteCatsGrid from '@/widgets/favoriteCats/ui/FavoriteCatsGrid/FavoriteCatsGrid'
import styles from './FavoriteCatsContent.module.css'

const FavoriteCatsContent = () => {
    const { favoriteCats, toggleFavoriteCat } = useFavoriteCats()
    const { listRef, listWidth, viewportHeight } = useFavoriteGridViewport()

    if (favoriteCats.length === 0) {
        return (
            <section className={styles.page}>
                <p className={styles.empty}>Пока пусто. Добавьте котиков из каталога через сердечко на карточке.</p>
            </section>
        )
    }

    return (
        <section ref={listRef} className={styles.page}>
            <FavoriteCatsGrid
                cats={favoriteCats}
                listWidth={listWidth}
                viewportHeight={viewportHeight}
                onToggleFavorite={toggleFavoriteCat}
            />
        </section>
    )
}

export default FavoriteCatsContent
