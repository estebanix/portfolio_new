import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";
import { Footer } from "../../components/Footer";
import { BarPlot } from "../../components/BoxPlot";

import styles from "./AboutPage.module.scss";
import { data } from "./../../components/BoxPlot/data";

export const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <HeaderMenu />
      <Section>
        <Article>
          <h2>About Me</h2>
          <p>
            Greetings! I am a bioarchaeology graduate student at Charles
            University in Prague, delving into the intriguing world of stable
            isotopes analysis. Currently pursuing my Master's degree, I am
            passionate about unraveling historical mysteries and revealing
            narratives concealed within ancient remnants.
          </p>

          <p>
            My academic journey is centered around the profound study of stable
            isotopes, serving as a valuable tool in my exploration of
            archaeological contexts. In the captivating intersection of
            archaeology and technology, I am keen on integrating programming
            into my bioarchaeological research. This includes not only enhancing
            laboratory techniques but also delving into the realm of data
            science in archaeology — from data processing to advanced
            visualization methods.
          </p>

          <BarPlot data={data} width={800} height={400} />
          <p>
            With a solid foundation in laboratory work, I've honed my skills in
            sample collection, processing, and analysis. My academic pursuits
            extend beyond the classroom, as I actively engage in archaeological
            expeditions, applying theoretical knowledge to real-world excavation
            scenarios.
          </p>

          <p>
            What sets me apart is my dual fervor for both archaeology and
            programming. I find joy in exploring innovative ways to present and
            understand complex archaeological information, utilizing data
            visualization techniques to their fullest potential.
          </p>

          <p>
            As a dedicated bioarchaeology student, I am increasingly drawn to
            the evolving landscape of technology and its role in archaeological
            research. My aspiration is to bridge the gap between traditional
            archaeology and modern computational methods. I am particularly
            intrigued by the possibilities in data science for archaeology,
            seeking new ways to uncover ancient stories and interpret historical
            data more comprehensively.
          </p>

          <p>
            In essence, I am a bioarchaeologist with a profound interest in
            stable isotopes analysis and a growing passion for data science in
            archaeology. My unique blend of skills, combining traditional
            laboratory expertise with modern programming, positions me to
            contribute innovative methodologies to the fascinating field of
            bioarchaeology.
          </p>
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
