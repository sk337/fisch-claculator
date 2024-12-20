const baitData = [
    {
        name: "Worm",
        identifier: "worm",
        resilience: 0,
        lure: 15,
        luck: {
            preferred: 15,
            universal: 0
        }
    }
] as const;

// Automatically generate the union type of the `identifier` values
export type baitType = typeof baitData[number]['identifier'];

/**
 * Interface for bait data
 */
interface Bait {
    /** Name of the Bait */
    name: string;
    /** Identifier for the bait */
    identifier: baitType;
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
    }
}

export const baits: Bait[] = baitData.map(bait => ({
    ...bait,
}));