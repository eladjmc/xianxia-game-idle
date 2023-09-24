export const calculateXpGain = (technique, spiritRoot, baseGameTick) => {
  const { grade, type } = technique;
  let xpGain = grade * baseGameTick; // Assume each grade gives 10 base XP

  if (type === spiritRoot) {
    return xpGain; // 100% progress
  } else if (type === "None") {
    return xpGain * 0.75; // 75% progress
  } else {
    return xpGain * 0.5; // 50% progress
  }
};

