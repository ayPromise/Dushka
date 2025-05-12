import type { ReactNode } from 'react';
import styles from '../FeedbackPage.module.scss';
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string;
    githubPath: string;
    icon: ReactNode
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubPath, icon }) => {
    return (
        <a className={styles.projectCard} href={githubPath}
            target="_blank"
            rel="noopener noreferrer">
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <p className={styles.techStack}>{techStack}</p>
            <div

                className={styles.githubLink}
            >
                <FaGithub />
            </div>
        </a>
    );
};

export default ProjectCard;