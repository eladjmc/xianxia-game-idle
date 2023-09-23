import { useGame } from "../context/GameContext";

export const useGameHook = () => {
  const { state, setState } = useGame();

  const increaseXP = (amount) => {
    setState((prevState) => ({
      ...prevState,
      currentCultivationXP: prevState.currentCultivationXP + amount,
    }));
  };

  const setPlayerSetup = (name, spiritRoot, technique) => {
    setState((prevState) => ({
      ...prevState,
      playerName: name,
      spiritRoot,
      cultivationTechniques: [
        ...prevState.cultivationTechniques,
        technique.name,
      ],
      currentlyUsedCultivationTechnique: technique,
      isGameStarted: true,
    }));
  };

  // Add more utility functions here

  return {
    // State
    cultivationRealm: state.cultivationRealm,
    currentRealmLevel: state.currentRealmLevel,
    currentCultivationXP: state.currentCultivationXP,
    maxCultivationXP: state.maxCultivationXP,
    spiritRoot: state.spiritRoot,
    cultivationTechniques: state.cultivationTechniques,
    currentlyUsedCultivationTechnique: state.currentlyUsedCultivationTechnique,
    battleTechniques: state.battleTechniques,
    currentBattleTechnique: state.currentBattleTechnique,
    spiritStones: state.spiritStones,
    hp: state.hp,
    sp: state.sp,
    str: state.str,
    agl: state.agl,
    luk: state.luk,
    age: state.age,
    playerName: state.playerName,
    isGameStarted: state.isGameStarted,

    // Utility functions
    increaseXP,
    setPlayerSetup,
    // Add more utility functions here
  };
};
