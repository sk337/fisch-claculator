const rarityData = [
    {
        name: "Trash",
        identifier: "trash"
    },
    {
        name: "Common",
        identifier: "common"
    },
    {
        name: "Uncommon",
        identifier: "uncommon"
    },
    {
        name: "Unusual",
        identifier: "unusual"
    },
    {
        name: "Rare",
        identifier: "rare"
    },
    {
        name: "Legendary",
        identifier: "legendary"
    },
    {
        name: "Mythical",
        identifier: "mythical"
    },
    {
        name: "Exotic",
        identifier: "exotic"
    },
    {
        name: "Relic",
        identifier: "relic"
    },
    {
        name: "Fragment",
        identifier: "fragment"
    },
    {
        name: "Gemstone",
        identifier: "gemstone"
    },
    {
        name: "Limited",
        identifier: "limited"
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