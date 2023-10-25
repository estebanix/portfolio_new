import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";
import { Footer } from "../../components/Footer";
import { CircularBarplot } from "../../components/CircularBarPlot/CircularBarPlot";

import styles from "./AboutPage.module.scss";
import { data } from "./../../components/CircularBarPlot/data";

export const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <HeaderMenu />
      <Section>
        <Article>
          <h2>About me</h2>
          <p>
            Hi! I'm Sam, and I'd like to share my journey to becoming a
            programming bioarchaeologist. I've always had a deep passion for
            archaeology, which led me to pursue it as my major in college. My
            focus was on studying diet reconstruction and provenance through
            stable isotope analyses. This journey taught me to appreciate the
            intricacies of the archaeological record.
          </p>
          <p>
            While writing my thesis, I achieved a significant milestone. My work
            was awarded by the Academy of Sciences of the Czech Republic in
            recognition of its contribution to the field of bioarchaeological
            data analysis. This recognition inspired me to explore the world of
            programming further. Over time, I completely immersed myself in
            programming and became particularly fascinated by React, and it was
            love at first sight. I've embraced <span>React</span> along with{" "}
            <span>D3</span> to create powerful data visualizations. This dynamic
            duo allows me to transform raw data into stunning and interactive
            visualizations that are equally at home in scientific papers and
            websites. Recently, I've also started working with <span>R</span>,
            expanding my repertoire of data analysis tools. Take a look, explore
            my work, and always remember to <span>"stay curious!"</span>
          </p>
        </Article>
        <CircularBarplot width={400} height={400} data={data} />
      </Section>
      <Footer />
    </div>
  );
};
