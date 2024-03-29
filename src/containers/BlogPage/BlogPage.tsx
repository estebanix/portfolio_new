import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Article } from "../../components/Article";
import { RenderBox } from "../../components/RenderBox";

import blogData from "./../../data/blogData.json";

import styles from "./BlogPage.module.scss";

export const BlogPage = () => {
  return (
    <div className={styles.blogPageContainer}>
      <HeaderMenu />
      <Section>
        <Article bigger = {true}>
          <h2>Blog</h2>
          <RenderBox limit={4} data={blogData} />
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
