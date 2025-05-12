import { useSyncExternalStore } from "react";
import { todoStore } from "../store/todos";
import type { TodoItem } from "../types/TodoItem";

const useTodoStore = (): [TodoItem[], (todos: TodoItem[]) => void] => {

    const todos = useSyncExternalStore(
        todoStore.subscribe,
        todoStore.getState
    );

    const setTodos = (newTodos: TodoItem[]) => {
        todoStore.setState(newTodos);
    };

    return [todos, setTodos];
};

export default useTodoStore;