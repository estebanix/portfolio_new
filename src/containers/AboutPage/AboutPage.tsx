import { useState, useEffect } from "react";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Section } from "../../components/Section";
import { Article } from "../../components/Article";
import { Footer } from "../../components/Footer";
import { BarPlot } from "../../components/BarPlot";
import { data } from "../../components/BarPlot/data";
import styles from "./AboutPage.module.scss";

export const AboutPage = () => {
  const [plotWidth, setPlotWidth] = useState(360);
  const [plotHeight, setPlotHeight] = useState(280);

  useEffect(() => {
    const calculateSize = () => {
      const screenWidth = window.innerWidth;
      let width, height;
    
      if (screenWidth <= 576) {
        width = Math.min(screenWidth - 20, 360);
        height = width * 0.778;
      } else if (screenWidth <= 991) {
        width = Math.min(screenWidth * 0.8, 660);
        height = width * 0.778;
      } else {
        width = Math.min(screenWidth * 0.6, 720);
        height = width * 0.778;
      }
    
      setPlotWidth(width);
      setPlotHeight(height);
    };

    calculateSize(); // Call the function immediately
    window.addEventListener("resize", calculateSize); // Add event listener for resize
    return () => window.removeEventListener("resize", calculateSize); // Remove event listener on cleanup
  }, []);

  return (
    <div className={styles.aboutPageContainer}>
      <HeaderMenu />
      <Section>
        <Article bigger={true}>
          <h2>About Me</h2>
          <p>
            Greetings! I am a bioarchaeology graduate student at Charles
            University in Prague, delving into the intriguing world of stable
            isotopes analysis. Currently pursuing my Master's degree, I am
            passionate about unraveling historical mysteries and revealing
            narratives concealed within ancient remnants.
          </p>
          <BarPlot data={data} width={plotWidth} height={plotHeight} />
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
