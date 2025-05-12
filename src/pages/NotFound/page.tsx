import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <div className={styles.notFound}>
            <h1>Oops! Page Not Found</h1>
            <p>It looks like the page you're looking for doesn’t exist. <a href="/">Go back home</a>.</p>
        </div>
    );
};

export default NotFoundPage;