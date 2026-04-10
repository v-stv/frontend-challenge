import { Grid } from 'react-window'
import type { CellComponentProps } from 'react-window'
import type { Cat } from '@/entities/cat'
import {
    CAT_COLUMNS,
    CAT_GRID_GAP,
    CAT_GRID_VIEWPORT_PADDING,
    CAT_MIN_CARD_HEIGHT,
    CAT_OVERSCAN_ROWS,
    CAT_ROWS_PER_VIEWPORT,
} from '@/widgets/cat/config/constants'
import CatGridCell from '@/widgets/cat/ui/CatGridCell/CatGridCell'
import styles from './CatsVirtualGrid.module.css'

interface Props {
    cats: Cat[]
    favoriteCatIds: Set<string>
    listWidth: number
    viewportHeight: number
    onToggleFavorite: (cat: Cat) => void
    onCellsRendered: (
        visibleCells: {
            columnStartIndex: number
            columnStopIndex: number
            rowStartIndex: number
            rowStopIndex: number
        },
        allCells: {
            columnStartIndex: number
            columnStopIndex: number
            rowStartIndex: number
            rowStopIndex: number
        },
    ) => void
}

interface CatGridCellData {
    cats: Cat[]
    columnsCount: number
    rowCount: number
    favoriteCatIds: Set<string>
    onToggleFavorite: (cat: Cat) => void
}

type CatGridCellProps = CellComponentProps<CatGridCellData> & CatGridCellData

const GridCell = ({
    columnIndex,
    rowIndex,
    style,
    cats,
    columnsCount,
    rowCount,
    favoriteCatIds,
    onToggleFavorite,
}: CatGridCellProps) => {
    const catIndex = rowIndex * columnsCount + columnIndex
    const cat = cats[catIndex]

    if (!cat) return null

    return (
        <CatGridCell
            cat={cat}
            style={style}
            isLastColumn={columnIndex === columnsCount - 1}
            isLastRow={rowIndex === rowCount - 1}
            isFavorite={favoriteCatIds.has(cat.id)}
            onToggleFavorite={onToggleFavorite}
        />
    )
}

const CatsVirtualGrid = ({
    cats,
    favoriteCatIds,
    listWidth,
    viewportHeight,
    onToggleFavorite,
    onCellsRendered,
}: Props) => {
    const gridWidth = Math.max(listWidth - CAT_GRID_VIEWPORT_PADDING * 2, 1)
    const rowHeight = Math.max(
        (viewportHeight + CAT_GRID_GAP) / CAT_ROWS_PER_VIEWPORT,
        CAT_MIN_CARD_HEIGHT + CAT_GRID_GAP,
    )
    const columnWidth = Math.max(gridWidth / CAT_COLUMNS, 1)
    const rowCount = Math.max(Math.ceil(cats.length / CAT_COLUMNS), 1)
    const gridHeight = CAT_ROWS_PER_VIEWPORT * rowHeight - CAT_GRID_GAP

    return (
        <div className={styles.gridViewport}>
            <Grid<CatGridCellData>
                cellComponent={GridCell}
                cellProps={{ cats, columnsCount: CAT_COLUMNS, rowCount, favoriteCatIds, onToggleFavorite }}
                className={styles.grid}
                columnCount={CAT_COLUMNS}
                columnWidth={columnWidth}
                rowCount={rowCount}
                rowHeight={rowHeight}
                overscanCount={CAT_OVERSCAN_ROWS}
                onCellsRendered={onCellsRendered}
                style={{ height: gridHeight, width: gridWidth }}
            />
        </div>
    )
}

export default CatsVirtualGrid
