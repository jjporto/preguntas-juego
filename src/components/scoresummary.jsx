import PropTypes from "prop-types";

const ScoreSummary = ({ correct, incorrect, totalQuestions, onRetryLevel, onGoToLevels }) => {
  return (
    <div className="score-summary">
      <h2>Resumen del nivel</h2>
      <div className="score-details">
        <span className="correct-score">Correctas: {correct}</span>
        <span className="incorrect-score">   Incorrectas: {incorrect}</span>
      </div>
      <p>Total preguntas: {totalQuestions}</p>
      
      <div className="buttons">
        <button onClick={onRetryLevel} className="btn-retry">
          Repetir nivel
        </button>
        <button onClick={onGoToLevels} className="btn-menu">
          Volver al menú de niveles
        </button>
      </div>
    </div>
  );
};

ScoreSummary.propTypes = {
  correct: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onNextLevel: PropTypes.func.isRequired,
  onRetryLevel: PropTypes.func.isRequired,
  onGoToLevels: PropTypes.func.isRequired,
  isLevelPassed: PropTypes.bool.isRequired,
};

export default ScoreSummary;
