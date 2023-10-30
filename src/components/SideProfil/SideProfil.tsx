import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./SideProfil.module.scss";

export const SideProfil = () => {
  return (
    <div className={styles.sideProfilContainer}>
      <img src="./../../../public/images/photo.jpg" />
      <h2>Samuel Kertés</h2>
      <p>Dovi Dopi Do</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={faLocationDot} /> Prague
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className={styles.linkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:samuelkertes@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={styles.envelope} /> Email
          </a>
        </li>
      </ul>
    </div>
  );
};
