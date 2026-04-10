import styles from './CatsSkeletonGrid.module.css'

const SKELETON_COUNT = 15

const CatsSkeletonGrid = () => {
    return (
        <div className={styles.grid} aria-hidden="true">
            {Array.from({ length: SKELETON_COUNT }, (_, index) => (
                <div key={index} className={styles.card} />
            ))}
        </div>
    )
}

export default CatsSkeletonGrid
