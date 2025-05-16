import { useState } from "react"
import type { TodoItem } from "../../../../types/TodoItem"
import SideActions from "./SideActions"
import styles from "./SideBar.module.scss"
import { Button, InputField } from "../../../../components"

interface SideBarProps {
    handleAddItem: (newItem: TodoItem) => void
}

const SideBar: React.FC<SideBarProps> = ({ handleAddItem }) => {
    const [content, setContent] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setContent(newValue)
    }

    const handleAdd = () => {
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

            <form action={handleAdd} className={styles.addForm}>
                <h3 className={styles.addTitle}>Add new task</h3>
                <InputField
                    id="name"
                    type="text"
                    placeholder="Study ..."
                    value={content}
                    onChange={handleChange}
                    required
                />
                <Button onClick={handleAdd}>Add to list</Button>
            </form>

            <SideActions />
        </aside>
    )
}

export default SideBar