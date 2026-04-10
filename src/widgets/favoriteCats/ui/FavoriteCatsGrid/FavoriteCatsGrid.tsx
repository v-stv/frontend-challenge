import { Grid } from 'react-window'
import type { CellComponentProps } from 'react-window'
import { FavoriteCatCell, type Cat } from '@/entities/cat'
import {
    FAVORITE_COLUMNS,
    FAVORITE_GRID_GAP,
    FAVORITE_GRID_VIEWPORT_PADDING,
    FAVORITE_MIN_CARD_HEIGHT,
    FAVORITE_OVERSCAN_ROWS,
    FAVORITE_ROWS_PER_VIEWPORT,
} from '@/widgets/favoriteCats/config/constants'
import styles from './FavoriteCatsGrid.module.css'

interface Props {
    cats: Cat[]
    listWidth: number
    viewportHeight: number
    onToggleFavorite: (cat: Cat) => void
}

interface FavoriteGridCellData {
    cats: Cat[]
    columnsCount: number
    rowCount: number
    onToggleFavorite: (cat: Cat) => void
}

type FavoriteGridCellProps = CellComponentProps<FavoriteGridCellData> & FavoriteGridCellData

const FavoriteGridCell = ({
    columnIndex,
    rowIndex,
    style,
    cats,
    columnsCount,
    rowCount,
    onToggleFavorite,
}: FavoriteGridCellProps) => {
    const catIndex = rowIndex * columnsCount + columnIndex
    const cat = cats[catIndex]

    if (!cat) return null

    return (
        <FavoriteCatCell
            cat={cat}
            style={style}
            gap={FAVORITE_GRID_GAP}
            isLastColumn={columnIndex === columnsCount - 1}
            isLastRow={rowIndex === rowCount - 1}
            onToggleFavorite={onToggleFavorite}
        />
    )
}

const FavoriteCatsGrid = ({ cats, listWidth, viewportHeight, onToggleFavorite }: Props) => {
    const gridWidth = Math.max(listWidth - FAVORITE_GRID_VIEWPORT_PADDING * 2, 1)
    const rowHeight = Math.max(
        (viewportHeight + FAVORITE_GRID_GAP) / FAVORITE_ROWS_PER_VIEWPORT,
        FAVORITE_MIN_CARD_HEIGHT + FAVORITE_GRID_GAP,
    )
    const columnWidth = Math.max(gridWidth / FAVORITE_COLUMNS, 1)
    const rowCount = Math.max(Math.ceil(cats.length / FAVORITE_COLUMNS), 1)
    const gridHeight = FAVORITE_ROWS_PER_VIEWPORT * rowHeight - FAVORITE_GRID_GAP

    return (
        <div className={styles.gridViewport}>
            <Grid<FavoriteGridCellData>
                cellComponent={FavoriteGridCell}
                cellProps={{ cats, columnsCount: FAVORITE_COLUMNS, rowCount, onToggleFavorite }}
                className={styles.grid}
                columnCount={FAVORITE_COLUMNS}
                columnWidth={columnWidth}
                rowCount={rowCount}
                rowHeight={rowHeight}
                overscanCount={FAVORITE_OVERSCAN_ROWS}
                style={{ height: gridHeight, width: gridWidth }}
            />
        </div>
    )
}

export default FavoriteCatsGrid
