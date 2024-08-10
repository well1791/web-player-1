"use client";

import { useState } from "react";

import styles from "./page.module.css";

export default function Home() {
  const [searchValue, setInputValue] = useState("");

  console.log({ searchValue });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.searchBarContainer}>
          <span className={styles.icon}>icon</span>
          <input
            className={styles.searchBar}
            type="text"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </div>
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
