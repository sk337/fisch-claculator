const baitData = [
  {
    name: "Worm",
    identifier: "worm",
    resilience: 0,
    lure: 15,
    luck: {
      preferred: 15,
      universal: 0,
    },
  },
  {
    name: "Insect",
    identifier: "insect",
    resilience: 0,
    lure: 5,
    luck: {
      preferred: 35,
      universal: 0,
    },
  },
  {
    name: "Shrimp",
    identifier: "shrimp",
    resilience: -5,
    lure: 0,
    luck: {
      preferred: 45,
      universal: 25,
    },
  },
  {
    name: "Bagel",
    identifier: "bagel",
    resilience: 15,
    lure: 0,
    luck: {
      preferred: 25,
      univerrsal: 0,
    },
  },
  {
    name: "Seaweed",
    identifier: "seaweed",
    resilience: 10,
    lure: 20,
    luck: {
      preferred: 35,
      universal: 0,
    },
  }
] as const;

// Automatically generate the union type of the `identifier` values
export type BaitType = (typeof baitData)[number]["identifier"];

/**
 * Interface for bait data
 */
interface Bait {
  /** Name of the Bait */
  name: string;
  /** Identifier for the bait */
  identifier: BaitType;
  /** Baits effect on resilience */
  resilience: number;
  /** Bait effect on lure speed */
  lure: number;
  /** object for the Bait's effect on luck */
  luck: {
    /** Luck increase for preferred fish */
    preferred: number;
    /** Luck increase for all fish */
    universal: number;
  };
}

export const baits: Bait[] = baitData.map((bait) => ({
  ...bait,
}));
