import { ImCross } from "react-icons/im"
import type { TodoItem } from "../../types/TodoItem"
import styles from "./TodoList.module.scss"

interface TodoListProps {
    todos: TodoItem[],
    handleRemoveItem: (itemIndex: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleRemoveItem }) => {
    return (
        <ul className={styles.todoList}>
            {todos && todos.map((item, index) =>
                <li key={index} className={styles.todoItem}>{item.content} <ImCross className={styles.removeIcon} onClick={() => handleRemoveItem(index)} /></li>
            )}
        </ul>
    )
}

export default TodoList