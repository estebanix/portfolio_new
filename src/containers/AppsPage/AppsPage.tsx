import { HeaderMenu } from "../../components/HeaderMenu";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";

import styles from "./AppsPage.module.scss";

export const AppsPage = () => {
  return (
    <div className={styles.appsPageContainer}>
      <HeaderMenu />
      <Section>
        <Article>
          <h2>Apps</h2>
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
