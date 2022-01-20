import Head from "next/head";
import Image from "next/image";
import LayoutDefault from "../layout/index";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <LayoutDefault>
      <div className={styles.container}>
        <h1>Index</h1>
      </div>
    </LayoutDefault>
  );
}
