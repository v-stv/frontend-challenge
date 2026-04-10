import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'
import styles from './Main.module.css'

const Main = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    )
}

export default Main