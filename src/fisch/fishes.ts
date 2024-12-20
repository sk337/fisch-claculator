import { BaitType } from "$/baits";

const fishData = [] as const;

// Automatically generate the union type of the `identifier` values
export type fishType = typeof fishData[number]['identifier'];

/**
 * Interface for fish data
 */
interface Fish {
    /** Name of the fish */
    name: string;
    /** Identifier of the fish */
    identifier: fishType;
    /** Bait that the fish uses */
    preferredBait: BaitType;
}

