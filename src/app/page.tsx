"use client";

import styles from "./page.module.css";
import SearchBar from "./components/searchBar/searchBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.rectangle}>
          <select className={styles.orderButton}>
            <option disabled>Order By</option>
            <option>Date</option>
            <option>Title</option>
          </select>
        </div>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
