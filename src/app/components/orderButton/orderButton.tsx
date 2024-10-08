"use client";

import { useState } from "react";

import styles from "./orderButton.module.css";

export default function OrderButton() {
  const [orderButtonValue, setInputValue] = useState("");

  console.log( {orderButtonValue} );
  
  return (
    <div className={styles.orderButtonRectangle}>
      <div className={styles.orderButtonContainer}>
        <select className={styles.orderButton} onChange={(event) => {
          setInputValue(event.target.value);
        }}> 
          
            <option selected value="None" disabled>Order By</option>
            <option value="Date">Date</option>
            <option value="Title">Title</option>
            <option value="Random">Random</option>

        </select>
      
      </div>
    </div> 
  );
}
