// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useGameContext } from "../context/GameContext";
// import { questions } from "../data/questions";
// import Question from "../components/Question";
// import ScoreSummary from "../components/ScoreSummary";
// import "../styles/level.css";

// // Función para mezclar y seleccionar preguntas al azar
// const shuffleAndSelectQuestions = (questionsArray, numQuestions) => {
//     const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
//     return shuffled.slice(0, numQuestions);
// };

// const Level = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const { unlockedLevels, setUnlockedLevels } = useGameContext();
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [correct, setCorrect] = useState(0);
//     const [incorrect, setIncorrect] = useState(0);
//     const [showSummary, setShowSummary] = useState(false);
//     const [selectedQuestions, setSelectedQuestions] = useState([]);

//     useEffect(() => {
//         // Seleccionar 3 preguntas al azar cuando el componente se monta
//         const levelQuestions = questions[`level${id}`];

//         if (levelQuestions) {
//             const randomQuestions = shuffleAndSelectQuestions(levelQuestions, 3);
//             setSelectedQuestions(randomQuestions);
//         } else {
//             navigate("/levels"); // Si no hay preguntas para el nivel, redirigir
//         }
//     }, [id, navigate]);

//     // Cambiar el fondo del body según la imagen de la pregunta
//     useEffect(() => {
//         if (selectedQuestions.length > 0) {
//             const currentImage = selectedQuestions[currentQuestion]?.image;
//             if (currentImage) {
//                 document.body.style.backgroundImage = `url(${currentImage})`;
//             }
//         }
//     }, [currentQuestion, selectedQuestions]);

//     // Verificar si el nivel está desbloqueado
//     if (parseInt(id) > unlockedLevels) {
//         navigate("/levels");
//         return null;
//     }

//     const handleAnswer = (answer) => {
//         const isCorrect = answer === selectedQuestions[currentQuestion].answer;

//         if (isCorrect) {
//             setCorrect((prevCorrect) => prevCorrect + 1);
//         } else {
//             setIncorrect((prevIncorrect) => prevIncorrect + 1);
//         }

//         if (currentQuestion < selectedQuestions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//         } else {
//             setShowSummary(true);

//             // Desbloquear el siguiente nivel si corresponde (para 5 niveles)
//             if (correct + 1 >= 3 && parseInt(id) < 5) {
//                 setUnlockedLevels((prev) => Math.max(prev, parseInt(id) + 1));
//             }
//         }
//     };

//     const handleNextLevel = () => {
//         if (parseInt(id) < 5) {
//             navigate(`/level/${parseInt(id) + 1}`);
//         } else {
//             navigate("/final");
//         }
//     };

//     const handleRetryLevel = () => {
//         setCurrentQuestion(0);
//         setCorrect(0);
//         setIncorrect(0);
//         setShowSummary(false);
//         const randomQuestions = shuffleAndSelectQuestions(questions[`level${id}`], 3);
//         setSelectedQuestions(randomQuestions);
//     };

//     const handleGoToLevels = () => {
//         if (parseInt(id) === 5) { // Verifica si es el último nivel
//             navigate("/final"); // Redirige a la vista final
//         } else {
//             navigate("/levels");
//         }
//     };

//     const currentQuestionData = selectedQuestions[currentQuestion];

//     return (
//         <div className="level-container">
//             {!showSummary ? (
//                 selectedQuestions.length > 0 ? (
//                     <Question
//                         question={currentQuestionData?.question}
//                         options={currentQuestionData?.options}
//                         onAnswer={handleAnswer}
//                     />
//                 ) : (
//                     <p>Cargando preguntas...</p>
//                 )
//             ) : (
//                 <ScoreSummary
//                     correct={correct}
//                     incorrect={incorrect}
//                     totalQuestions={selectedQuestions.length}
//                     onNextLevel={handleNextLevel}
//                     onRetryLevel={handleRetryLevel}
//                     onGoToLevels={handleGoToLevels}
//                     isLevelPassed={correct === selectedQuestions.length}
//                 />
//             )}
//         </div>
//     );
// };

// export default Level;
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGameContext } from "../context/GameContext";
import { questions } from "../data/questions";
import Question from "../components/Question";
import ScoreSummary from "../components/Scoresummary.jsx";
import "../styles/level.css";

// Función para mezclar y seleccionar preguntas al azar
const shuffleAndSelectQuestions = (questionsArray, numQuestions) => {
    const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numQuestions);
};

const Level = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { unlockedLevels, setUnlockedLevels } = useGameContext();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        // Seleccionar 3 preguntas al azar cuando el componente se monta
        const levelQuestions = questions[`level${id}`];

        if (levelQuestions) {
            const randomQuestions = shuffleAndSelectQuestions(levelQuestions, 3);
            setSelectedQuestions(randomQuestions);
        } else {
            navigate("/levels"); // Si no hay preguntas para el nivel, redirigir
        }
    }, [id, navigate]);

    // Cambiar el fondo del body según la imagen de la pregunta
    useEffect(() => {
        if (selectedQuestions.length > 0) {
            const currentImage = selectedQuestions[currentQuestion]?.image;
            if (currentImage) {
                document.body.style.backgroundImage = `url(${currentImage})`;
            }
        }
    }, [currentQuestion, selectedQuestions]);

    // Verificar si el nivel está desbloqueado
    if (parseInt(id) > unlockedLevels) {
        navigate("/levels");
        return null;
    }

    const handleAnswer = (answer) => {
        const isCorrect = answer === selectedQuestions[currentQuestion].answer;
        // Calcular el nuevo número de respuestas correctas
        const newCorrectCount = isCorrect ? correct + 1 : correct;

        if (isCorrect) {
            setCorrect(newCorrectCount);
        } else {
            setIncorrect((prevIncorrect) => prevIncorrect + 1);
        }

        if (currentQuestion < selectedQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowSummary(true);

            // Desbloquear el siguiente nivel si se contestaron correctamente las 3 preguntas y el nivel actual es menor a 5
            if (newCorrectCount >= 3 && parseInt(id) < 5) {
                setUnlockedLevels((prev) => Math.max(prev, parseInt(id) + 1));
            }
        }
    };

    const handleNextLevel = () => {
        if (parseInt(id) < 5) {
            navigate(`/level/${parseInt(id) + 1}`);
        } else {
            navigate("/final");
        }
    };

    const handleRetryLevel = () => {
        setCurrentQuestion(0);
        setCorrect(0);
        setIncorrect(0);
        setShowSummary(false);
        const randomQuestions = shuffleAndSelectQuestions(questions[`level${id}`], 3);
        setSelectedQuestions(randomQuestions);
    };

    const handleGoToLevels = () => {
        // Si es el último nivel (nivel 5) y se contestaron correctamente las 3 preguntas, ir a la vista final
        if (parseInt(id) === 5 && correct === selectedQuestions.length) {
            navigate("/final");
        } else {
            navigate("/levels");
        }
    };

    const currentQuestionData = selectedQuestions[currentQuestion];

    return (
        <div className="level-container">
            {!showSummary ? (
                selectedQuestions.length > 0 ? (
                    <Question
                        question={currentQuestionData?.question}
                        options={currentQuestionData?.options}
                        onAnswer={handleAnswer}
                    />
                ) : (
                    <p>Cargando preguntas...</p>
                )
            ) : (
                <ScoreSummary
                    correct={correct}
                    incorrect={incorrect}
                    totalQuestions={selectedQuestions.length}
                    onNextLevel={handleNextLevel}
                    onRetryLevel={handleRetryLevel}
                    onGoToLevels={handleGoToLevels}
                    isLevelPassed={correct === selectedQuestions.length}
                />
            )}
        </div>
    );
};

export default Level;
