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
            I am currently a dedicated graduate student pursuing a Master's
            degree in Archaeology, specializing in the fascinating realm of
            stable isotopes analysis. Exploring the intersection of archaeology
            and technology, I'm passionate about integrating programming into my
            bioarchaeological research to enhance and innovate in the field. My
            academic focus centers around the profound study of stable isotopes,
            employing them as a valuable tool to unravel historical mysteries
            and unearth stories hidden within ancient remnants.
          </p>
          <p>
            My experience spans across multiple domains. I possess a strong
            foundation in laboratory work, where I've honed my skills in sample
            collection, processing, and analysis. Alongside my academic
            pursuits, I actively participate in archaeological expeditions,
            applying theoretical knowledge to real-world excavation scenarios.
            What sets me apart is my dual fervor for both archaeology and
            programming, where I also delve into data visualization techniques,
            seeking innovative ways to present and understand complex
            archaeological information.
          </p>
          <CircularBarplot width={400} height={400} data={data} />
          <p>
            I'm enthusiastic about embracing the ever-evolving landscape of
            technology and its role in archaeological research. My aspiration is
            to bridge the gap between traditional archaeology and modern
            computational methods, exploring new possibilities in data
            visualization and seeking innovative ways to uncover ancient stories
            and interpret historical data more comprehensively.
          </p>
          <p>
            I'm a dedicated archaeology graduate student with a profound
            interest in stable isotopes analysis and a strong passion for data
            visualization, blending my programming skills with the exploration
            of historical narratives. With hands-on experience in both
            laboratory work and archaeological expeditions, I aim to contribute
            unique perspectives and innovative methodologies to the field of
            bioarchaeology.
          </p>
        </Article>
      </Section>
      <Footer />
    </div>
  );
};
