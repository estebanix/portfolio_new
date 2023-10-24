import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareXTwitter, faResearchgate } from '@fortawesome/free-brands-svg-icons'

import styles from "./Footer.module.scss";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>SOCIALS:</p>
      <ul>
        <a href="https://github.com/estebanix">
          <li className="nav-li">
            <FontAwesomeIcon style={{ color: "#000000" }} icon={faGithub} />{" "}
            GITHUB
          </li>
        </a>
        <a href="https://twitter.com/SamuelKertes">
          <li className="nav-li">
            <FontAwesomeIcon
              style={{ color: "#1DA1F2" }}
              icon={faSquareXTwitter}
            />{" "}
            TWITTER
          </li>
        </a>
        <li className="nav-li">
          <FontAwesomeIcon style={{ color: "#79E9D3" }} icon={faResearchgate} />{" "}
          RESEARCH GATE
        </li>
      </ul>
    </footer>
  );
};
