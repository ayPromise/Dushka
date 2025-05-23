import type { TodoItem } from "../../types/TodoItem"
import styles from "./Header.module.scss"
import Tabs from "./Tabs"

interface HeaderProps {
    todos: TodoItem[]
}

const Header: React.FC<HeaderProps> = ({ todos }) => {
    const completedItems = todos.filter((item) => item.completed)
    return (
        <header className={styles.header}>
            <div className={styles.circlesContainer}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>

            <Tabs />
            <div className={styles.counter}><strong>{completedItems.length}</strong> / {todos.length} completed</div>
        </header>
    )
}

export default Header