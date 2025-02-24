import { useNavigate } from "react-router-dom";
import { useGameContext } from "../context/GameContext";
import "../styles/levels.css";

const Levels = () => {
  const navigate = useNavigate();
  const { unlockedLevels } = useGameContext();

  const levelsInfo = [
    { number:1, label:"Inmersión" },
    { number:2, label:"Tiempo" },
    { number:3, label:" Espacio" },
    { number:4, label:"Causa_efecto" },
    { number:5, label:"Interacción" }
  ];

  return (
    <div className="levels-pages">
      <h2>SELECCIONA UN NIVEL:</h2>
      <div className="cards-container">
        {levelsInfo.map((level) => (
          <div
            key={level.number}
            className={`card1 ${
              level.number <= unlockedLevels ? "clickable" : "locked"
            }`}
            onClick={() =>
              level.number <= unlockedLevels
                ? navigate(`/level/${level.number}`)
                : null
            }
          >
            <span>
              Nivel {level.number}: {level.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;
