import { headerMenuItems } from "../../utils/constans/headerMenuItems";
import { Link } from "react-router-dom";
import { Image } from "../Image";

import styles from "./HeaderMenu.module.scss";
import photo from "./../../../public/images/photo.jpg"

export const HeaderMenu = () => {
  return (
    <div className={styles.headerMenuContainer}>
      <Image src={photo} radius={true} />
      <div className={styles.headerMenuItemBox}>
        {headerMenuItems.map((item, index) => {
          return (
            <Link key={index} to={item.to} className={styles.headerMenuLink}>
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
