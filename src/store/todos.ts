import type { TodoItem } from "../types/TodoItem";

const STORAGE_KEY = "todos"

const getInitialTodos = (): TodoItem[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveTodos = (todos: TodoItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {
    alert("Failed to save todos to localStorage");
  }
};

const createTodoStore = () => {
  let todos: TodoItem[] = getInitialTodos();
  const listeners = new Set<() => void>();

  const emitChange = () => {
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const getState = () => todos;

  const setState = (newTodos: TodoItem[]) => {
    todos = newTodos;
    saveTodos(todos);
    emitChange(); // notify listeners
  };

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      try {
        todos = event.newValue ? JSON.parse(event.newValue) : [];
        emitChange();
      } catch {
        console.error("Failed to parse todos from storage event");
      }
    }
  });

  return {
    subscribe,
    getState,
    setState,
  };
};

export const todoStore = createTodoStore();