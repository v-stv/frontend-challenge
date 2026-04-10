import { useFavoriteCats } from '@/entities/cat'
import { useCatsCatalogData } from '@/widgets/cat/lib/hooks/useCatsCatalogData'
import { useCatsGridViewport } from '@/widgets/cat/lib/hooks/useCatsGridViewport'
import CatsVirtualGrid from '@/widgets/cat/ui/CatsVirtualGrid/CatsVirtualGrid'
import CatsSkeletonGrid from '@/widgets/cat/ui/CatsSkeletonGrid/CatsSkeletonGrid'
import styles from './CatsList.module.css'

const CatsList = () => {
    const { favoriteCatIds, toggleFavoriteCat } = useFavoriteCats()
    const { listRef, listWidth, viewportHeight } = useCatsGridViewport()
    const { cats, isFetching, isError, handleCellsRendered } = useCatsCatalogData()

    return (
        <section ref={listRef} className={styles.wrapper}>
            {isFetching && cats.length === 0 ? (
                <CatsSkeletonGrid />
            ) : (
                <CatsVirtualGrid
                    cats={cats}
                    favoriteCatIds={favoriteCatIds}
                    listWidth={listWidth}
                    viewportHeight={viewportHeight}
                    onToggleFavorite={toggleFavoriteCat}
                    onCellsRendered={handleCellsRendered}
                />
            )}

            {isError && cats.length === 0 && <p className={styles.status}>Не удалось загрузить котят.</p>}
            {isFetching && cats.length > 0 && <p className={styles.status}>Загружаем еще котят...</p>}
        </section>
    )
}

export default CatsList
