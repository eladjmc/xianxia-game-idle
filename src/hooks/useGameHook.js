import { useGame } from "../context/GameContext";
import { REALM_NAME } from "../models/realmModel";
import { calculateXpGain } from "../utils/gameLogic";

const levelUpScalingFactor = 1.2; // Increase max XP by 20% each level
const realmUpScalingFactor = 2;  // Double max XP each realm

export const useGameHook = () => {
  const { state, setState } = useGame();

  const levelUp = (prevState) => {
    let newRealm = prevState.cultivationRealm;
    let newLevel = prevState.currentRealmLevel + 1;
    let newAge = prevState.age;
    let newMaxXP = prevState.maxCultivationXP * levelUpScalingFactor;
  
    // Default stat increases
    let strIncrease = 1;
    let aglIncrease = 1;
    let spIncrease = 5;
    let hpIncrease = 10;
    let lukIncrease = 1;
  
    if (newLevel > 9) {
      newRealm++;
      newLevel = 1;
      newAge = REALM_NAME[newRealm + 1].baseAge;
      newMaxXP *= realmUpScalingFactor;
  
      // Multiply stats by 5 upon realm level up
      strIncrease *= 5;
      aglIncrease *= 5;
      spIncrease *= 5;
      hpIncrease *= 5;
      lukIncrease *= 5;
    }
  
    return {
      ...prevState,
      cultivationRealm: newRealm,
      currentRealmLevel: newLevel,
      currentCultivationXP: 0,
      maxCultivationXP: newMaxXP,
      age: newAge,
      str: prevState.str + strIncrease,
      agl: prevState.agl + aglIncrease,
      sp: prevState.sp + spIncrease,
      hp: prevState.hp + hpIncrease,
      luk: prevState.luk + lukIncrease,
    };
  };
  
  

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

  const gainCultivationXP = () => {
    const xpGain = calculateXpGain(
      state.currentlyUsedCultivationTechnique,
      state.spiritRoot.type,
      state.baseCultivationXPTick
    );
    console.log("XP Gain:", xpGain);
  
    setState((prevState) => {
      const newXP = prevState.currentCultivationXP + xpGain;
      if (newXP >= prevState.maxCultivationXP) {
        // Call levelUp function here and return its new state
        const leveledUpState = levelUp(prevState);
        return {
          ...leveledUpState,
          currentCultivationXP: 0,
        };
      }
      return {
        ...prevState,
        currentCultivationXP: newXP,
      };
    });
  };
  
  

  return {
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
    currentAge: state.currentAge,
    playerName: state.playerName,
    isGameStarted: state.isGameStarted,
    currentBattleTechniqueXP: state.currentBattleTechniqueXP,
    baseCultivationXPTick: state.baseCultivationXPTick,

    increaseXP,
    setPlayerSetup,
    gainCultivationXP,
    levelUp,
  };
};
