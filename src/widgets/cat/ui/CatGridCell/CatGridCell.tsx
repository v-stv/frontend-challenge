import type { CSSProperties } from 'react'
import type { Cat } from '@/entities/cat'
import { CAT_GRID_GAP } from '@/widgets/cat/config/constants'
import { IconActionButton } from '@/shared/ui/IconActionButton'
import styles from './CatGridCell.module.css'

interface Props {
    cat: Cat
    style: CSSProperties
    isLastColumn: boolean
    isLastRow: boolean
    isFavorite: boolean
    onToggleFavorite: (cat: Cat) => void
}

const CatGridCell = ({ cat, style, isLastColumn, isLastRow, isFavorite, onToggleFavorite }: Props) => {
    return (
        <div style={style}>
            <article
                className={styles.card}
                style={{
                    width: `calc(100% - ${isLastColumn ? 0 : CAT_GRID_GAP}px)`,
                    height: `calc(100% - ${isLastRow ? 0 : CAT_GRID_GAP}px)`,
                }}
            >
                <IconActionButton
                    className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteButtonActive : ''}`}
                    type="button"
                    onClick={() => onToggleFavorite(cat)}
                    aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                    title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                >
                    <svg className={styles.favoriteIcon} viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </IconActionButton>
                <img className={styles.image} src={cat.url} alt="Kitten" loading="lazy" />
            </article>
        </div>
    )
}

export default CatGridCell
