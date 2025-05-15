import { Button } from "../../../../components"
import styles from "./SideBar.module.scss"

const SideActions = () => {
    return (
        <div className={styles.sideActionsContainer}>
            <Button type="secondary">Sign in</Button>
            <Button type="secondary">Sign up</Button>
        </div>
    )
}

export default SideActions