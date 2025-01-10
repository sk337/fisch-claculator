// Define the mutations array with 'as const' to preserve literal types
const mutationData = [
    {
        name: "Aurora",
        identifier: "aurora",
        value: 6.5,
    },
    {
        name: "Mythical",
        identifier: "mythical",
        value: 4.5,
    },
    {
        name: "Sunken",
        identifier: "sunken",
        value: 4,
    },
    {
        name: "Greedy",
        identifier: "greedy",
        value: 4,
    },
    {
        name: "Nuclear",
        identifier: "nuclear",
        value: 4,
    },
    {
        name: "Abyssal",
        identifier: "abyssal",
        value: 3.5,
    },
    {
        name: "Revitalized",
        identifier: "revitalized",
        value: 3.5,
    },
    {
        name: "Seasonal (Spring)",
        identifier: "spring",
        value: 3,
    },
    {
        name: "Atlantean",
        identifier: "atlantean",
        value: 3,
    },
    {
        name:"Fossilized",
        identifier: "fossilized",
        value: 2.5,
    },
    {
        name: "Solarblaze",
        identifier: "solarblaze",
        value: 2.5,
    },
    {
        name: "Seasonal (Winter)",
        identifier: "winter",
        value: 2.5,
    },
    {
        name: "Lunar",
        identifier: "lunar",
        value: 2.5,
    },
    {
        name: "Celestial",
        identifier: "celestial",
        value: 2,
    },
    {
        name: "Midas",
        identifier: "midas",
        value: 2,
    },
    {
        name: "Purified",
        identifier: "purified",
        value: 2,
    },
    {
        name: "Glossy",
        identifier: "glossy",
        value: 1.6,
    },
    {
        name: "Silver",
        identifier: "silver",
        value: 1.6,
    },
    {
        name: "Mosaic",
        identifier: "mosaic",
        value: 1.5,
    },
    {
        name: "Hexed",
        identifier: "hexed",
        value: 1.5,
    },
    {
        name: "Electric",
        identifier: "electric",
        value: 1.45,
    },
    {
        name: "Scorched",
        identifier: "scorched",
        value: 1.3
    },
    {
        name: "Darkened",
        identifier: "darkened",
        value: 1.3
    },
    {
        name: "Translucent",
        identifier: "translucent",
        value: 1.3
    },
    {
        name: "Frozen",
        identifier: "frozen",
        value: 1.3
    },
    {
        name: "Negative",
        identifier: "negative",
        value: 1.3
    },
    {
        name: "Seasonal (Summer)",
        identifier: "summer",
        value: 1.3
    },
    {
        name: "Seasonal (Autumn)",
        identifier: "autumn",
        value: 1.25
    },
    {
        name: "Albino",
        identifier: "albino",
        value: 1.1
    },
    {
        name: "Amber",
        identifier: "amber",
        value: 0.5
    },
    {
        name: "Unsellable",
        identifier: "unsellable",
        value: 0
    }
] as const;

// Automatically generate the union type of the `identifier` values
export type MutationType = typeof mutationData[number]['identifier'];

/**
 * Interface for fish mutations
 */
export interface Mutation {
    /** Name of the fish mutation */
    name: string;
    /** Mutation identifier (auto-generated union type) */
    identifier: MutationType;
    /** Value multiplier */
    value: number;
}

export const mutations: Mutation[] = mutationData.map(mutation => ({
    ...mutation,
}));


export function getMutationByIdentifier(identifier: MutationType | undefined): Mutation | undefined {
    return mutations.find(mutation => mutation.identifier === identifier);
}