import styles from "./SideBar.module.scss"
import Button from "../Button"

const AddTodoForm = () => {
    return (
        <form className={styles.addForm}>
            <h3 className={styles.addTitle}>Add a todo</h3>
            <input type="text" className={styles.addInput} />
            <Button>Add to list</Button>
        </form>
    )
}

export default AddTodoForm