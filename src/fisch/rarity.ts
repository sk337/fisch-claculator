const rarityData = [] as const;

// Automatically generate the union type of the `identifier` values
export type RarityType = typeof rarityData[number]['identifier'];

