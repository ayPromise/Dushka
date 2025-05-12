import styles from "./TodoList.module.scss"
import { ImCross } from "react-icons/im";


const RemoveIcon = () => {
    return <ImCross className={styles.removeIcon} />
}

export default RemoveIcon