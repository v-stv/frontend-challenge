import styles from './NavigationMenu.module.css'
import type { MenuLink } from '../../model/types'
import NavigationMenuItem from '../NavigationMenuItem/NavigationMenuItem'

interface Props {
    navLinks: MenuLink[]
}

const NavigationMenu = (props: Props) => {
    const { navLinks } = props

    return (
        <nav aria-label="Навигация по разделам">
            <ul className={styles.menu}>
                {navLinks.map((link) => (
                    <NavigationMenuItem key={link.title} link={link} />
                ))}
            </ul>
        </nav>
    )
}

export default NavigationMenu
