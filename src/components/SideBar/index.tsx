import AddTodoForm from "./AddTodoForm"
import SideActions from "./SideActions"
import styles from "./SideBar.module.scss"

const SideBar = () => {
    return (
        <aside className={styles.sidebar}>
            <AddTodoForm />
            <SideActions />
        </aside>
    )
}

export default SideBar