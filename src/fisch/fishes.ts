import { BaitType } from "$/baits";
import { RarityType } from "$/rarity";
import { SeasonType } from "./season";
import { WeatherType } from "./weather";

const fishData = [
  {
    name: "Seaweed",
    identifier: "seaweed",
    preferredBait: "magnet",
    min: 0.1,
    max: 0.6,
    rarity: "trash",
    price: 30,
  },
  {
    name: "Destroyed Fossil",
    identifier: "destroyedFossil",
    rarity: "trash",
    price: 7.778,
    min: 1,
    max: 9.5,
    time: "day",
  },
  {
    name: "Largemouth Bass",
    identifier: "largemouthBass",
    preferredBait: "worm",
    min: 1,
    max: 9.5,
    rarity: "common",
    price: 20,
    weather: {
      rain: true,
    },
    season: {
      spring: true,
      summer: true,
    },
  },
  {
    name: "Sand Dollar",
    rarity: "common",
    identifier: "sandDollar",
    price: 100,
    min: 0.1,
    max: 0.4,
    season: {
      summer: true,
    },
  },
  {
    name: "Trout",
    identifier: "trout",
    rarity: "common",
    weather: {
      clear: true,
    },
    price: 13,
    max: 10.5,
    min: 0.9,
  },
  {
    name: "Pollack",
    identifier: "pollack",
    rarity: "common",
    weather: {
      foggy: true,
      rain: true,
    },
    season: {
      summer: true,
    },
    price: 14,
    min: 1,
    max: 10.5,
  },
  {
    name: "Porgy",
    identifier: "porgy",
    rarity: "common",
    weather: {
      clear: true,
      foggy: true,
    },
    time: "day",
    season: {
      summer: true,
      spring: true,
    },
    bait: "shrimp",
    min: 0.5,
    max: 6.3,
    price: 30,
  },
  {
    name: "Mackerel",
    identifier: "mackerel",
    rarity: "common",
    weather: {
      foggy: true,
    },
    time: "day",
    season: {
      spring: true,
      autumn: true,
    },
    bait: "shrimp",
    min: 1,
    max: 8.4,
    price: 18.75,
  },
  {
    name: "Minnow",
    identifier: "minnow",
    rarity: "common",
    weather: {
      clear: true,
    },
    season: {
      spring: true,
    },
    bait: "bagel",
    min: 0.1,
    max: 1.3,
    price: 75
  },
  {
    name: "Gudgeon",
    identifier: "gudgeon",
    rarity: "common",
    time: "day",
    price: 133.333,
    min: 0.1,
    max: 0.6,
    bait: "insect",
  },
  {
    name: "Reef Minnow",
    identifier: "reefMinnow",
    rarity: "common",
    price: 141.667,
    min: 0.1,
    max:1.3,
    bait: "seaweed",
  },
  {
    name:"The Depths Key",
    identifier: "depthKey",
    rarity: "exotic",
    min: 50,
    price: 8,
    max: 210,
    time: "day"
  }
] as const;

// Automatically generate the union type of the `identifier` values
export type fishType = (typeof fishData)[number]["identifier"];

/**
 * Interface for fish data
 */
export interface Fish {
  /** Name of the fish */
  name: string;
  /** Identifier of the fish */
  identifier: fishType;
  /** Bait that the fish uses */
  preferredBait?: BaitType;
  /** Lowest KG */
  min: number;
  /** Highest KG */
  max: number;
  /** Rarity of the fish */
  rarity: RarityType;
  /** Price per kg */
  price: number;
  /** Preferences */
  weather?: Partial<Record<WeatherType, boolean>>;
  time?: "day" | "night";
  season?: Partial<Record<SeasonType, boolean>>;
}

export const fishes: Fish[] = fishData.map((fish) => ({
  ...fish,
}));

export function getFishByIdentifier(
  identifier: fishType | undefined
): Fish | undefined {
  return fishes.find((fish) => fish.identifier === identifier);
}
