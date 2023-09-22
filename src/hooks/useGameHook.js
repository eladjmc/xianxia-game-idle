import { useGame } from '../context/GameContext';

export const useGameHook = () => {
  const { state, setState } = useGame();

  const increaseXP = (amount) => {
    setState(prevState => ({
      ...prevState,
      currentCultivationXP: prevState.currentCultivationXP + amount,
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

    // Utility functions
    increaseXP,
    // Add more utility functions here
  };
};
