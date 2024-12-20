const seasonData = [
    {
        name: "Spring",
        identifier: "spring",
    },
    {
        name: "Summer",
        identifier: "summer",
    },
    {
        name: "Fall",
        identifier: "fall",
    },
    {
        name: "Winter",
        identifier: "winter",
    },
] as const;

export type SeasonType = typeof seasonData[number]['identifier'];

/**
 * Interface for season data
 */
interface Season {
    /** Name of the season */
    name: string;
    /** Identifier of the season */
    identifier: SeasonType;
}
export const seasons: Season[] = seasonData.map(season => ({
    ...season,
}));