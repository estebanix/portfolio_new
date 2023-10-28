import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import { HeaderMenu } from "../../components/HeaderMenu";
import styles from "./CurrentPostPage.module.scss";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";
import Markdown from "react-markdown";

export const CurrentPostPage = () => {
  const { name } = useParams();
  const { currentBlog } = useContext(Context);

  const post = currentBlog.find((post) => post.title === name);

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className={styles.currentPostPageContainer}>
      <HeaderMenu />
      <Section>
        <Article>
          <h2>{post.title}</h2>
          <Markdown>
            {post.content}
          </Markdown>
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
