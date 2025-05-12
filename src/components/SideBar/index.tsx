import { useState } from "react"
import type { TodoItem } from "../../types/TodoItem"
import Button from "../Button"
import SideActions from "./SideActions"
import styles from "./SideBar.module.scss"

interface SideBarProps {
    handleAddItem: (newItem: TodoItem) => void
}

const SideBar: React.FC<SideBarProps> = ({ handleAddItem }) => {
    const [content, setContent] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setContent(newValue)
    }

    const handleClick = () => {
        if (content) {
            const newItem: TodoItem = {
                content,
                completed: false
            }
            handleAddItem(newItem)
            setContent("")
        }
    }

    return (
        <aside className={styles.sidebar}>

            {/** Add todo item */}
            <form className={styles.addForm}>
                <h3 className={styles.addTitle}>Add a todo</h3>
                <input type="text" className={styles.addInput} onChange={handleChange} value={content} placeholder="Study..." />
                <Button onClick={handleClick}>Add to list</Button>
            </form>

            <SideActions />
        </aside>
    )
}

export default SideBar