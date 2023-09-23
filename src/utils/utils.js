import { SPIRIT_ROOTS } from "../models/spiritRootsModel";

export const getRandomRoot = (roots = SPIRIT_ROOTS) => {
  const random = Math.random();
  const index = Math.floor(random * roots.length);
  return roots[index];
};
