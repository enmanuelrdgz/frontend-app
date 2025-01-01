import './styles/styles.css'

export default function Home() {
  return (
    <div>

      <main>
        <div className="survey">
          <h2>¿Cuál es tu color favorito?</h2>
          <div className="option">
            <span className="option-text">Azul</span>
            <span className="vote-count">42 votos</span>
          </div>
          <div className="option">
            <span className="option-text">Rojo</span>
            <span className="vote-count">38 votos</span>
          </div>
          <div className="option">
            <span className="option-text">Verde</span>
            <span className="vote-count">25 votos</span>
          </div>
        </div>

        <div className="survey">
          <h2>¿Qué mascota prefieres?</h2>
          <div className="option">
            <span className="option-text">Perros</span>
            <span className="vote-count">65 votos</span>
          </div>
          <div className="option">
            <span className="option-text">Gatos</span>
            <span className="vote-count">58 votos</span>
          </div>
          <div className="option">
            <span className="option-text">Peces</span>
            <span className="vote-count">12 votos</span>
          </div>
        </div>
      </main>
    </div>
  );
}
