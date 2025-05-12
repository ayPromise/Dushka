import { ImCross } from "react-icons/im"
import type { TodoItem } from "../../types/TodoItem"
import styles from "./TodoList.module.scss"

interface TodoListProps {
    todos: TodoItem[],
    handleRemoveItem: (itemIndex: number) => void
    updateItem: (itemIndex: number, newItem: TodoItem) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleRemoveItem, updateItem }) => {
    return (
        <ul className={styles.todoList}>
            {todos.map((item, index) => {
                return <li key={index}
                    className={`${styles.todoItem} ${item.completed ? styles.completed : ""}`}
                    onClick={() => updateItem(index, { ...item, completed: !item.completed })}
                >

                    {item.content}

                    <ImCross className={styles.removeIcon} onClick={(event) => {
                        event.stopPropagation()
                        handleRemoveItem(index)
                    }} />

                </li>
            }
            )}
        </ul>
    )
}

export default TodoList