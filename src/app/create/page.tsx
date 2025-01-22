"use client"

import React from 'react';
import styles from "../../styles/createPollPage.module.css"
import Link from 'next/link';
import { useState } from 'react';

const CreatePollPage: React.FC = () => {

  return (
      <div className={styles["layout"]}>
          <h1>Create Poll</h1>
  <label>Title</label>
  <input className={styles["input"]} type="text"/>
  <div className={styles["options-container"]} id="options-container">

    <div className={styles["option-container"]}>
      <div className={styles["option-title"]}>
        <label>Option 1</label>
      </div>
      <div className={styles["option-input"]}>
        <input className={styles["input"]} type="text"/>
        <button className={styles["remove-option-btn"]}>Remove</button>
      </div>
    </div>
    
    <div className={styles["option-container"]}>
      <div className={styles["option-title"]}>
        <label>Option 1</label>
      </div>
      <div className={styles["option-input"]}>
        <input className={styles["input"]} type="text"/>
        <button className={styles["remove-option-btn"]}>Remove</button>
      </div>
    </div>

  </div>
  

  <button className={styles["add-option-btn"]}>Add new option</button>

  <Link href="/home">
  <button className={styles["btn"]}>Create</button>
  </Link>
  <Link href="/home">
  <button className={styles["btn"]}>Go Back</button>
  </Link>
              
      </div>
  );
};

export default CreatePollPage;