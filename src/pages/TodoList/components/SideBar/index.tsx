import { useState } from "react"
import type { TodoItem } from "../../../../types/TodoItem"
import Button from "../../../../components/Button"
import SideActions from "./SideActions"
import styles from "./SideBar.module.scss"
import InputField from "../../../../components/InputField"

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
                <h3 className={styles.addTitle}>Add new task</h3>
                <InputField
                    id="name"
                    type="text"
                    placeholder="Study ..."
                    value={content}
                    onChange={handleChange}
                    required
                />
                <Button onClick={handleClick}>Add to list</Button>
            </form>

            <SideActions />
        </aside>
    )
}

export default SideBar