import { useState } from "react"
import BackgroundTitle from "./components/BackgroundTitle"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import TodoList from "./components/TodoList"
import type { TodoItem } from "./types/TodoItem"


function App() {

  const [todos, setTodos] = useState<TodoItem[]>([
    {
      content: "Yeah baby",
      completed: false
    }
  ])

  const updateItem = (itemIndex: number, newItem: TodoItem) => {
    const newTodos: TodoItem[] = todos.map((item, index) => {
      if (index === itemIndex)
        return newItem

      return item
    })

    setTodos(newTodos)
  }

  const handleAddItem = (newItem: TodoItem) => {
    setTodos((prev) => [
      ...prev,
      newItem
    ])
  }

  const handleRemoveItem = (itemIndex: number) => {
    const filteredState = todos.filter((_, index) => index !== itemIndex)
    setTodos(filteredState)
  }

  return (
    <div className="container">
      <BackgroundTitle />

      <main>
        <Header todos={todos} />
        <section>
          <TodoList todos={todos} handleRemoveItem={handleRemoveItem} updateItem={updateItem} />
          <SideBar handleAddItem={handleAddItem} />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
