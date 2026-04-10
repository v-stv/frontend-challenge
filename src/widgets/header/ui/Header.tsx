import styles from './Header.module.css'
import {NavigationMenu} from "@/shared/ui/NavigationMenu";
import {NAV_ITEMS} from "@/widgets/header/config/constants";

const Header = () => {

    return (
        <header className={styles.header}>
            <NavigationMenu navLinks={NAV_ITEMS} />
        </header>
    )
}

export default Header