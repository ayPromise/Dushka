import TodoList from "./components/TodoList";
import type { TodoItem } from "../../types/TodoItem";
import SideBar from "./components/SideBar";

interface TodoListPageProps {
    todos: TodoItem[];
    handleRemoveItem: (itemIndex: number) => void;
    updateItem: (itemIndex: number, newItem: TodoItem) => void;
    handleAddItem: (newItem: TodoItem) => void;
}

const TodoListPage: React.FC<TodoListPageProps> = ({
    todos,
    handleRemoveItem,
    updateItem,
    handleAddItem,
}) => {
    return (
        <section>
            <TodoList
                todos={todos}
                handleRemoveItem={handleRemoveItem}
                updateItem={updateItem}
            />
            <SideBar handleAddItem={handleAddItem} />
        </section>
    );
};

export default TodoListPage;