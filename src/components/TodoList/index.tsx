import RemoveIcon from "./RemoveIcon"
import styles from "./TodoList.module.scss"

const TodoList = () => {
    return (
        <ul className={styles.todoList}>
            {Array.from(Array(5)).map(() =>
                <li className={styles.todoItem}>study for exam <RemoveIcon /></li>
            )}
        </ul>
    )
}

export default TodoList