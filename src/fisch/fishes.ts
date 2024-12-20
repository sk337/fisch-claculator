import { BaitType } from "$/baits";
import { RarityType } from "$/rarity";

const fishData = [
    {
        name: "Largemouth Bass",
        identifier: "largemouthBass",
        preferredBait: "worm",
        min: 1,
        max: 8,
        rarity: "common",
        price: 20
    }
] as const;

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
    /** Lowest KG */
    min: number;
    /** Highest KG */
    max: number;
    /** Rarity of the fish */
    rarity: RarityType;
    /** Price per kg */
    price: number;
}

