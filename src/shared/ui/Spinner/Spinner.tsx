import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.container} role="status" aria-live="polite" aria-label="Загрузка">
            <div className={styles.spinner} />
            <p className={styles.label}>Загружаем...</p>
        </div>
    )
}

export default Spinner
