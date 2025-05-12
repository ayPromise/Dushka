import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <pre className={styles.span}>
                I was inspired by&nbsp;
                <a className={styles.link} href="https://www.youtube.com/watch?v=5r25Y9Vg2P4&t=3288s" target="#blank">ByteGuard video</a>
                .&nbsp;@ayPromise ;)
            </pre>
        </footer>
    )
}

export default Footer