"use client";

import styles from "./page.module.css";
import SearchBar from "./components/searchBar/searchBar";
import OrderButton from "./components/orderButton/orderButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchBar />
        <OrderButton/>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
