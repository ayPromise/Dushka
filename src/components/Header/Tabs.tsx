import { useLocation } from "react-router-dom"
import styles from "./Header.module.scss"

const Tabs = () => {
    const { pathname } = useLocation()

    const links = [
        {
            href: "/Dushka",
            title: "Todo list"
        },
        {
            href: "/Dushka/feedback",
            title: "Contact me"
        }
    ]

    return (
        <ul className={styles.tabsContainer}>
            {links.map((item, index) =>
                <a href={item.href} key={index} className={`${styles.tabItem} ${item.href === pathname ? styles.active : ""}`}>
                    {item.title}
                </a>
            )}
        </ul>
    )
}

export default Tabs