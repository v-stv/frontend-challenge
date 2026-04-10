import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'
import { EAppRoutes } from '@/shared/config'

const NotFound = () => {
    return (
        <section className={styles.page}>
            <div className={styles.code}>404</div>
            <h1 className={styles.title}>Страница не найдена</h1>
            <p className={styles.description}>Похоже, ссылка устарела или такой страницы больше нет.</p>
            <Link className={styles.action} to={EAppRoutes.CAT_CATALOG}>
                Вернуться к котикам
            </Link>
        </section>
    )
}

export default NotFound
