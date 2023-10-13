import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <HeaderMenu />
      <Section>
        <p>aaaaaa</p>
      </Section>
    </div>
  );
};
