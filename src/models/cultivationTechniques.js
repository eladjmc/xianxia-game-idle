export const WATER_TECHNIQUES = [
  {
    name: "Aqua Flow Meditation",
    grade: 1,
    type: "Water",
  },
  {
    name: "Tidal Surge Mastery",
    grade: 2,
    type: "Water",
  },
  {
    name: "Frostbinder's Method",
    grade: 3,
    type: "Water",
  },
  {
    name: "Hydrokinetic Torrent Form",
    grade: 4,
    type: "Water",
  },
  {
    name: "Oceanic Mastery",
    grade: 5,
    type: "Water",
  },
];

export const FIRE_TECHNIQUES = [
  {
    name: "Blazing Ember Manual",
    grade: 1,
    type: "Fire",
  },
  {
    name: "Inferno Burst Manual",
    grade: 2,
    type: "Fire",
  },
  {
    name: "Flamestorm Incantation Manual",
    grade: 3,
    type: "Fire",
  },
  {
    name: "Pyroclasmic Surge Manual",
    grade: 4,
    type: "Fire",
  },
  {
    name: "Eternal Flame Manual",
    grade: 5,
    type: "Fire",
  },
];

export const NO_ELEMENT_TECHNIQUES = [
  {
    name: "Basic Chi Manual",
    grade: 1,
    type: "All",
  },
  {
    name: "Intermediate Chi Manual",
    grade: 2,
    type: "All",
  },
  {
    name: "Advance Chi Manual",
    grade: 3,
    type: "All",
  },
  {
    name: "Supreme Chi Manual",
    grade: 4,
    type: "All",
  },
  {
    name: "Godly Chi Manual",
    grade: 5,
    type: "All",
  },
];

export const EARTH_TECHNIQUES = [
  {
    name: "Stoneheart Meditation",
    grade: 1,
    type: "Earth",
  },
  {
    name: "Terracraft Mastery",
    grade: 2,
    type: "Earth",
  },
  {
    name: "Geomancer's Insight",
    grade: 3,
    type: "Earth",
  },
  {
    name: "Earthen Titan Form",
    grade: 4,
    type: "Earth",
  },
  {
    name: "Primordial Earthshaper",
    grade: 5,
    type: "Earth",
  },
];

export const AIR_TECHNIQUES = [
  {
    name: "Whispering Zephyr Technique",
    grade: 1,
    type: "Air",
  },
  {
    name: "Aerodynamic Mastery",
    grade: 2,
    type: "Air",
  },
  {
    name: "Cyclone Convergence Method",
    grade: 3,
    type: "Air",
  },
  {
    name: "Skyward Ascension Form",
    grade: 4,
    type: "Air",
  },
  {
    name: "Tempestual Vortex Mastery",
    grade: 5,
    type: "Air",
  },
];

export const METAL_TECHNIQUES = [
  {
    name: "Ironforge Meditation",
    grade: 1,
    type: "Metal",
  },
  {
    name: "Steelweaver's Mastery",
    grade: 2,
    type: "Metal",
  },
  {
    name: "Adamantine Arts",
    grade: 3,
    type: "Metal",
  },
  {
    name: "Molten Core Forging",
    grade: 4,
    type: "Metal",
  },
  {
    name: "Legendary Alloycraft",
    grade: 5,
    type: "Metal",
  },
];

export const WOOD_TECHNIQUES = [
  {
    name: "Verdant Growth Technique",
    grade: 1,
    type: "Wood",
  },
  {
    name: "Sylvan Harmony Mastery",
    grade: 2,
    type: "Wood",
  },
  {
    name: "Nature's Embrace Art",
    grade: 3,
    type: "Wood",
  },
  {
    name: "Druidic Vitality Form",
    grade: 4,
    type: "Wood",
  },
  {
    name: "Ancient Grove Awakening",
    grade: 5,
    type: "Wood",
  },
];

export const CULTIVATION_TECHNIQUES = [
  ...AIR_TECHNIQUES,
  ...EARTH_TECHNIQUES,
  ...FIRE_TECHNIQUES,
  ...WATER_TECHNIQUES,
  ...WOOD_TECHNIQUES,
  ...METAL_TECHNIQUES,
  ...NO_ELEMENT_TECHNIQUES,
];

export const WORST_GRADE = 0;
export const TOP_GRADE = 4