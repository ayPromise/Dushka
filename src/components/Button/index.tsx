import type { PropsWithChildren } from "react"
import styles from "./Button.module.scss"

interface ButtonProps extends PropsWithChildren {
    type?: "secondary" | "default"
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
    return (
        <button type="button" className={`${styles.button} ${type === "secondary" ? styles.secondary : ""}`}>{children}</button>
    )
}

export default Button