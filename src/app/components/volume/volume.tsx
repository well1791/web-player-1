"use client";

//import { useState } from "react";

import styles from "./volume.module.css";

export default function Volume() {
  
  return (
    <div className={styles.volumeContainer}>
        <button className={styles.btnIcon}>icon</button>
        <div className={styles.slider}></div>
    </div>
  );
}
