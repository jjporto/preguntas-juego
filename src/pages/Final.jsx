import '../styles/Final.css';

const Final = () => {
  return (
    <div className="final-container">
      <img 
        src="https://res.cloudinary.com/dwg4kerpk/image/upload/v1740420927/ultimo_xf9clw.jpg" 
        alt="Fondo" 
        className="final-background" 
      />
      
      <div className="final-message">
        <h1 className="final-title">¡Gracias por jugar!</h1>
        <p className="final-subtitle">Esperamos que hayas aprendido algo nuevo.</p>
      </div>
      
      <img 
        src="https://res.cloudinary.com/dwg4kerpk/image/upload/v1740420926/mu%C3%B1ecojoshida_copia_mc0jqi.png" 
        alt="Imagen de agradecimiento" 
        className="final-image" 
      />

      {/* Cuadro único de creadores en la esquina inferior derecha */}
      <div className="final-creators">
        Autores: Yoshira Ríos | Ivan Mercado Martinez
      </div>
    </div>
  );
};

export default Final;
