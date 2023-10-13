import styles from "./Image.module.scss";

interface ImageProps {
    src: string;
}

export const Image: React.FC <ImageProps> = ({src}) => {
    return (
        <img className={styles.logo} src={src} />
    );
}