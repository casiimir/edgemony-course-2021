import Link from "next/link";
import styles from "./index.module.scss";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/products">
              <a>PRODOTTI</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.content}>{children}</div>

      <div className={styles.footer}>Footer</div>
    </>
  );
}
