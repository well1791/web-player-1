"use client";

import { useState } from "react";

import styles from "./searchBar.module.css";

export default function SearchBar() {
  const [searchValue, setInputValue] = useState("");

  console.log({ searchValue });

  return (
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
  );
}
