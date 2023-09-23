import { SPIRIT_ROOTS } from "../models/spiritRootsModel";

export const getRandomRoot = (roots = SPIRIT_ROOTS) => {
  const random = Math.random();
  const index = Math.floor(random * roots.length);
  return roots[index];
};

export const formatSpiritStones = (num) => {
  if (num < 1000) return num;
  const units = ["k", "M", "B", "T"];
  const unit = Math.floor((num.toFixed(0).length - 1) / 3) * 3;
  const numStr = (num / ("1e" + unit)).toFixed(2);
  const unitStr = units[Math.floor(unit / 3) - 1];
  return `${numStr}${unitStr}`;
};
