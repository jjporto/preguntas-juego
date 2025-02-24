import '../styles/Proposito.css';

const Proposito = () => {
  return (
    <div className="proposito-wrapper">
      <div className="card-proposito">
        <h2 className="card-title">PROPÓSITO</h2>
        <p className="card-text">
          Es un juego educativo de cinco niveles diseñado para guiar progresivamente al usuario en la comprensión de lo que es “Impacto Ambiental”.
          A través de una experiencia dinámica, los jugadores exploran desde la clasificación de Impacto Ambiental más intuitiva de definir, hasta su persistencia en el tiempo,
          su extensión espacial y la relación causa-efecto. Además, se fomenta la reflexión sobre la capacidad de recuperación de los ecosistemas y la interacción entre múltiples
          impactos, buscando también el incremento del interés y conciencia hacia el medio ambiente y fortaleciendo el criterio para la toma de decisiones tanto en los proyectos de
          la industria como en la vida diaria.
        </p>
      </div>
      <img 
        src="https://res.cloudinary.com/dwg4kerpk/image/upload/v1740420926/mu%C3%B1ecojoshida_copia_mc0jqi.png" 
        alt="Muñeco Joshida" 
        className="proposito-image" 
      />
    </div>
  );
};

export default Proposito;
