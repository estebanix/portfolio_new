import { BlogPostCard } from "../BlogPostCard";

import styles from "./RenderBox.module.scss";

interface dataProps {
  title: string;
  date: string;
  content: string;
  img: string;
}

interface RenderBoxProps {
  data?: dataProps[];
  limit: number;
  row?: boolean;
}

export const RenderBox: React.FC<RenderBoxProps> = ({ data, limit, row }) => {
  const limitedData = data ? data.slice(0, limit) : [];
  return (
    <div
      className={styles.renderBoxContainer}
      style={{ flexDirection: row ? "row" : "column", marginTop: row && "100px" }}
    >
      {limitedData!.map((dat, index) => {
        return (
          <BlogPostCard
            key={index}
            title={dat.title}
            date={dat.date}
            content={dat.content}
            img={dat.img}
          />
        );
      })}
    </div>
  );
};
