import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.searchBarContainer}>
          <span className={styles.icon}>icon</span>
          <input className={styles.searchBar} type="text" />
        </div>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
