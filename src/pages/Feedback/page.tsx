import { TbDrone } from 'react-icons/tb';
import FeedbackForm from './components/FeedbackForm';
import ProjectCard from './components/ProjectCard';
import styles from './FeedbackPage.module.scss';
import { FaBook, FaEdit } from 'react-icons/fa';

const FeedbackPage = () => {
    const projects = [
        {
            title: 'Web Content Editor',
            description: 'Currently in development, this dynamic WYSIWYG editor empowers you to craft beautifully formatted text—think bold, italic, and more—with ease and precision, all in real-time!',
            techStack: 'React, Tailwind',
            githubPath: 'https://github.com/ayPromise/web-content-editor',
            icon: <FaEdit />,
        },
        {
            title: 'The Bridge',
            description: 'Dive into your favorite .fb2 books seamlessly! The Bridge lets you import and read your eBooks directly, offering ambient sounds and intuitive reading experience anytime, anywhere.',
            techStack: 'React, react-router v7, Strapi v5, Tailwind',
            githubPath: 'https://github.com/ayPromise/TheBridge',
            icon: <FaBook />,
        },
        {
            title: 'IcarusEye',
            description: 'Take flight with IcarusEye! Master unmanned flying systems through interactive offline/online lessons, lectures, articles, and tests—your journey to becoming a skilled operator starts here!',
            techStack: 'React, Next.js, Nest.js, Tailwind',
            githubPath: 'https://github.com/ayPromise/IcarusWEB',
            icon: <TbDrone />,
        },
    ];

    return (
        <div className={styles.feedbackPage}>
            <div className={styles.gridContainer}>
                {/* Top Left - FeedbackForm */}
                <div className={styles.feedbackBlock}>
                    <FeedbackForm />
                </div>


                {projects.map((item, index) =>
                    <div className={styles.projectBlock}
                        key={index}>
                        <ProjectCard
                            title={item.title}
                            description={item.description}
                            techStack={item.techStack}
                            githubPath={item.githubPath}
                            icon={item.icon}
                        />
                    </div>
                )}

            </div>
        </div>
    );
};

export default FeedbackPage;