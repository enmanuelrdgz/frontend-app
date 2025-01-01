import styles from "../styles/Header.module.css"

type HeaderProps = {
  title: string; 
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={styles["header-container-1"]}>
        <h1>{title}</h1>
      </div>
      <div className={styles["header-container-2"]}>
        <img src="https://api.dicebear.com/9.x/bottts/svg?seed=Christian" alt="avatar" width={50} height={50}/>
      </div>
    </header>
  );
};

export default Header;