import { BlogPostCard } from "../BlogPostCard";

interface dataProps {
  title: string;
  date: string;
  content: string;
}

interface RenderBoxProps {
  data?: dataProps[];
  limit: number;
}

export const RenderBox: React.FC<RenderBoxProps> = ({ data, limit }) => {
  const limitedData = data ? data.slice(0, limit) : [];
  return (
    <>
      {limitedData!.map((dat, index) => {
        return (
          <BlogPostCard
            key={index}
            title={dat.title}
            date={dat.date}
            content={dat.content}
          />
        );
      })}
    </>
  );
};
