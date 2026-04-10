import styles from './NavigationMenuItem.module.css'
import { NavLink } from 'react-router-dom'
import type { MenuLink } from '../../model/types'

interface Props {
    link: MenuLink
}

const NavigationMenuItem = (props: Props) => {
    const {
        link: { to, title },
    } = props

    return (
        <li className={styles.menu_item}>
            <NavLink
                className={({ isActive }) => `${styles.menu_link} ${isActive ? styles.menu_link_active : ''}`}
                end={to === '/'}
                to={to}
            >
                {title}
            </NavLink>
        </li>
    )
}

export default NavigationMenuItem
