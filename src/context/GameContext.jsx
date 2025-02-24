/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [unlockedLevels, setUnlockedLevels] = useState(1); // Niveles desbloqueados
  const [score, setScore] = useState(0); // Puntuación global

  return (
    <GameContext.Provider value={{ unlockedLevels, setUnlockedLevels, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};

// Exportar correctamente la función de uso del contexto
export const useGameContext = () => useContext(GameContext);
