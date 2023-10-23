import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { StreamGraph } from "../../components/StreamGraph/StreamGraph";
import { data } from "./../../components/StreamGraph/data";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section>
        {data ? (
          <StreamGraph data={data} width={920} height={460} />
        ) : (
          <pre>Loading...</pre>
        )}
      </Section>
    </div>
  );
};
