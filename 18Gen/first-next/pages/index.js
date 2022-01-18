import Image from "next/image";
import LayoutDefault from "../Layout/index";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <LayoutDefault>
      <div className={styles.container}>
        <div className={styles.mainCard}>
          <h1>Benvenuti</h1>
          <h4>lorem ipsum dolor sit amen</h4>
          <Image
            src="https://picsum.photos/200/300"
            alt="hero image"
            width="600"
            height="400"
          />
        </div>
      </div>
    </LayoutDefault>
  );
}
