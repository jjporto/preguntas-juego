import { useNavigate } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Video de fondo */}
      <video className="background-video" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dwg4kerpk/video/upload/v1740421008/video_lynby4.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Capa de efecto sobre el video */}
      <div className="overlay"></div>
      
     
      <div className="content">
        <h1>EcoQuiz</h1>
        <button onClick={() => navigate("/levels")}>Empezar</button>
        <button onClick={() => navigate("/proposito")}>Proposito</button>
      </div>
    </div>
  );
};

export default Home;
