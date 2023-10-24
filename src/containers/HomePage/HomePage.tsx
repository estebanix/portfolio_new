import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { StreamGraph } from "../../components/StreamGraph/StreamGraph";
import { data } from "./../../components/StreamGraph/data";
import { TextBar } from "../../components/TitleBar";
import { Footer } from "../../components/Footer";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section>
        <TextBar title="Who am I?" text="I'm an passionate bioarchaeologist, React developer and data visualization nerd." />
        {data ? (
          <StreamGraph data={data} width={920} height={460} />
        ) : (
          <pre>Loading...</pre>
        )}
      </Section>
      <Footer />
    </div>
  );
};
