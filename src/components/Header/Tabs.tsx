import { useLocation } from "react-router-dom"
import styles from "./Header.module.scss"

const Tabs = () => {
    const { pathname } = useLocation()

    const links = [
        {
            href: "/Dushka",
            title: "Tasks"
        },
        {
            href: "/Dushka/#/feedback",
            title: "Contact me"
        }
    ]

    return (
        <ul className={styles.tabsContainer}>
            {links.map((item, index) => {
                const urlArray = item.href.split("/")
                let correctPath = `/`

                if (urlArray.length !== 2)
                    correctPath = `/${urlArray.pop()}`

                return <a href={item.href} key={index} className={`${styles.tabItem} ${correctPath === pathname ? styles.active : ""}`}>
                    <div className={styles.leftCurvedEdge}></div>
                    {item.title}
                    <div className={styles.rightCurvedEdge}></div>
                </a>
            }
            )}
        </ul>
    )
}

export default Tabs