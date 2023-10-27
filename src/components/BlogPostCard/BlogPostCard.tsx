import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

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
      <Link to={`/blog/${title}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        <FontAwesomeIcon icon={faClock} /> {date}
      </p>
      <h4>{content}</h4>
      <img src={img} />
    </div>
  );
};
