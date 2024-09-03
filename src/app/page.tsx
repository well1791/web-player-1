"use client";

import styles from "./page.module.css";
import SearchBar from "./components/searchBar/searchBar";
import OrderButton from "./components/orderButton/orderButton";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SearchBar />
        <OrderButton />
      </main>
      <Footer />
    </div>
  );
}