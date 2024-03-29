import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { StreamGraph } from "../../components/StreamGraph/StreamGraph";
import { data } from "../../data/mainPlotData";
import { TextBar } from "../../components/TitleBar";
import { Footer } from "../../components/Footer";
import { Article } from "../../components/Article";
import { RenderBox } from "../../components/RenderBox";
import { Button } from "../../components/Button";

import styles from "./HomePage.module.scss";
import blogData from "./../../data/blogData.json";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section>
        <TextBar title="Who am I?" text="I'm an passionate bioarchaeologist, programmer and data visualization enthusiast. Currently I mostly work with TypeScript, React, Python and R." />
        {data ? (
          <StreamGraph data={data} width={920} height={460} />
        ) : (
          <pre>Loading...</pre>
        )}
        <Article bigger={true}>
          <h2>Recent Posts</h2>
          <RenderBox limit={2} data={blogData} />
          <Button text="Show more" to="blog" />
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
