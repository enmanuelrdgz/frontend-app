'use client';

import styles from "../styles/Header.module.css"

const Header: React.FC<void> = () => {  
  return (
    <header className={styles["header"]}>
        <button className={styles["loginButton"]}>Login</button>  
    </header>
  );
};

export default Header;