import BackgroundTitle from "./components/BackgroundTitle"
import Footer from "./components/Footer"
import Header from "./components/Header"
import type { TodoItem } from "./types/TodoItem"
import useTodoStore from "./hooks/useTodoStore"
import TodoListPage from "./pages/TodoList/page"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FeedbackPage from "./pages/Feedback/page"


function App() {

  const [todos, setTodos] = useTodoStore()

  const updateItem = (itemIndex: number, newItem: TodoItem) => {
    const newTodos: TodoItem[] = todos.map((item, index) => {
      if (index === itemIndex)
        return newItem

      return item
    })

    setTodos(newTodos)
  }

  const handleAddItem = (newItem: TodoItem) => {
    setTodos([
      ...todos,
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

      <BrowserRouter>
        <main>
          <Header todos={todos} />
          <Routes>
            <Route
              path="/"
              element={<TodoListPage todos={todos} handleRemoveItem={handleRemoveItem} updateItem={updateItem} handleAddItem={handleAddItem} />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>



    </div>
  )
}

export default App
