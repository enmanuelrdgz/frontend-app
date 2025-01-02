"use client"

import styles from "../styles/Header.module.css"
import { useAuth } from "../context/AuthContext";


const Header: React.FC = () => {

  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header className={styles["header"]}>
    {isAuthenticated ? (
      <button className={styles["loginButton"]} onClick={logout}>Logout</button>
    ) : (
      <button className={styles["loginButton"]} onClick={login}>Login</button>
    )}
  </header>   
  );
};

export default Header;