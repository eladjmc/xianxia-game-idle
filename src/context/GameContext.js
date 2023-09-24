import React, { createContext, useContext, useEffect, useState } from "react";

// Initial state
const initialState = {
  cultivationRealm: 0,
  currentRealmLevel: 1,
  currentCultivationXP: 0,
  currentBattleTechniqueXP: 0,
  maxCultivationXP: 100,
  baseCultivationXPTick:300,
  spiritRoot: { type: "Water", grade: 1 },
  cultivationTechniques: [],
  currentlyUsedCultivationTechnique: {
    name: "Aqua Flow Meditation",
    grade: 1,
    type: "Water",
  },
  battleTechniques: [
    {
      name: "Basic Martial Arts",
      grade: 1,
      type: "None",
      description: "A basic none elemental fighting style",
      stats: { hp: 0.1, sp: 0.1, str: 0.1, agl: 0.1 },
    },
  ],
  currentBattleTechnique: {
    name: "Basic Martial Arts",
    grade: 1,
    type: "None",
    description: "A basic none elemental fighting style",
    stats: { hp: 0.1, sp: 0.1, str: 0.1, agl: 0.1 },
  },
  spiritStones: 5,
  playerName: "",
  hp: 100,
  sp: 100,
  str: 10,
  agl: 10,
  luk: 10,
  age: 18,
  currentAge: 18,
  isGameStarted: false,
};

const GameContext = createContext({
  state: initialState,
  setState: (newState) => {},
});

export const GameProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log("Current State:", state);
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
