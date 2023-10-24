import styles from "./Article.module.scss";

interface ArticleProps {
    children: React.ReactNode;
}

export const Article: React.FC <ArticleProps> = ({children}) => {
    return (
        <div className={styles.articleContainer}>
            {children}
        </div>
    );
}