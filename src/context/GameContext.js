import React, { createContext, useContext, useEffect, useState } from "react";

// Initial state
const initialState = {
  cultivationRealm: 0,
  currentRealmLevel: 1,
  currentCultivationXP: 0,
  maxCultivationXP: 100,
  spiritRoot: { type: "water", grade: 1 },
  cultivationTechniques: [],
  currentlyUsedCultivationTechnique: {},
  battleTechniques: [],
  currentBattleTechnique: "",
  spiritStones: 5,
  playerName: "",
  hp: 100,
  sp: 100,
  str: 10,
  agl: 10,
  luk: 10,
  age: 18,
  isGameStarted: false,
};

const GameContext = createContext({
  state: initialState,
  setState: (newState) => {},
});

export const GameProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Any side-effects, like saving to local storage, can go here
  }, [state]);

  return (
    <GameContext.Provider value={{ state, setState }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext);
};
