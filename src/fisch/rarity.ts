const rarityData = [
    {
        name: "Common",
        identifier: "common"
    }
] as const;

// Automatically generate the union type of the `identifier` values
export type RarityType = typeof rarityData[number]['identifier'];

/**
 * Interface for rarity data
 */
interface Rarity {
    name: string;
    identifier: RarityType;
}

export const rarity: Rarity[] = rarityData.map(rarity => ({
    ...rarity,
}));