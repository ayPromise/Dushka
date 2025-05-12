import styles from "./Button.module.scss"

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: "secondary" | "default",
}

const Button: React.FC<ButtonProps> = ({ children, type = "default", ...props }) => {
    return (
        <button {...props} type="button" className={`${styles.button} ${type === "secondary" ? styles.secondary : ""}`}>{children}</button>
    )
}

export default Button