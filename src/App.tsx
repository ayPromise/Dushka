import BackgroundTitle from "./components/BackgroundTitle"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import TodoList from "./components/TodoList"

function App() {

  return (
    <div className="container">
      <BackgroundTitle />

      <main>
        <Header />
        <section>
          <TodoList />
          <SideBar />
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
