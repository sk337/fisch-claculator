// Define the mutations array with 'as const' to preserve literal types
const mutationData = [
    {
        name: "Shiny",
        identifier: "shiny",
        value: 1.85,
    },
    {
        name: "Sparkling",
        identifier: "sparkling",
        value: 1.85,
    },
    
] as const;

// Automatically generate the union type of the `identifier` values
export type MutationType = typeof mutationData[number]['identifier'];

interface Mutation {
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
