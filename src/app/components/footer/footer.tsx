"use client";

import { useState } from "react";

import styles from "./footer.module.css";

import Volume from "../volume/volume";

export default function Footer() {
  
    return(
        <div>
            <footer className={styles.footer}>
                <Volume />
            </footer>  
        </div>
    )
}
