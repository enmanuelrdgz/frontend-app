'use client';

import styles from "../styles/Header.module.css"

type HeaderProps = {
  title: string; 
};

const Header: React.FC<HeaderProps> = ({ title }) => {


  function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    if(menu != null) {
      // Alternar visibilidad del menú
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  }
  

  return (
    <header className={styles.header}>
      <div className={styles["header-container-1"]}>
        <h1>{title}</h1>
      </div>
      <div className={styles["header-container-2"]}>
        <div className="profile-container">
          <button onClick={toggleMenu}>
          <img className={styles["profile-picture"]} src="https://api.dicebear.com/9.x/bottts/svg?seed=Christian" alt="avatar"/>
          </button>
          {/* Menú desplegable */}
          <div id="dropdown-menu" className="dropdown-content">
            <a href="#">Ver perfil</a>
            <a href="#">Configuración</a>
            <a href="#">Cerrar sesión</a>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;