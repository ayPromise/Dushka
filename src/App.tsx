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
        <Header />
        <section>
          <TodoList todos={todos} handleRemoveItem={handleRemoveItem} />
          <SideBar handleAddItem={handleAddItem} />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
