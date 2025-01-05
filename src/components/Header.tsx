"use client"

import styles from "../styles/Header.module.css"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext";

const Header: React.FC = () => {

  const { isAuthenticated } = useAuth();


  return (
    <>
      {
        isAuthenticated ?

        (
          <header className={styles["header"]}>
            <button className={styles["button"]}>
              <Link href="/">
                Logout
              </Link>
            </button>

            <button className={styles["button"]}>
              <Link href="/create">
                Create Survey
              </Link>
            </button>

          </header>
        )

        :

        (
          <header className={styles["header"]}>
            <button className={styles["button"]}>
              <Link href="/register">
                Register
              </Link>
            </button>

            <button className={styles["button"]}>
              <Link href="/login">
                Login
              </Link>
            </button>
          </header>   
        )

      }
    </>
  );
};

export default Header;