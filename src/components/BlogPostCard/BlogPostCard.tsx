import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import styles from "./BlogPostCard.module.scss";
import img from "./../../../public/images/blogpic.png";

interface BlogPostCardProps {
  title: string;
  date: string;
  content: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  date,
  content,
}) => {
  return (
    <div className={styles.blogPostCardContainer}>
      <h2>{title}</h2>
      <p>
        <FontAwesomeIcon icon={faClock} /> {date}
      </p>
      <h4>{content}</h4>
      <img src={img} />
    </div>
  );
};
