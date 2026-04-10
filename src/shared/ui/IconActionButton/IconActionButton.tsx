import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './IconActionButton.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
}

const IconActionButton = ({ children, className = '', ...buttonProps }: Props) => {
    return (
        <button {...buttonProps} className={`${styles.button} ${className}`.trim()}>
            {children}
        </button>
    )
}

export default IconActionButton
