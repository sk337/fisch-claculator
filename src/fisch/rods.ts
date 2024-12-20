const rodData = [
    {
        name: "Flimsy Rod",
        identifier: "flimsy",
        lure: 0,
        luck: 0,
        control: 0,
        resilience: 0,
        maxKg: 10.4,
        unobtainable: false
    },
    {
        name: "Fischer's Rod",
        identifier: "starterPack",
        lure: 5,
        luck: 5,
        control: 0.05,
        resilience: 5,
        maxKg: 50,
        unobtainable: false
    },
    {
        name: "Training Rod",
        identifier: "training",
        lure: 10,
        luck: -70,
        control: 0.2,
        resilience: 20,
        maxKg: 9,
        unobtainable: false
    },
    {
        name: "Plastic Rod",
        identifier: "plastic",
        lure: 10,
        luck: 15,
        control: 0,
        resilience: 10,
        maxKg: 100,
        unobtainable: false
    },
    {
        name: "Carbon Rod",
        identifier: "carbon",
        lure: -10,
        luck: 25,
        control: 0.05,
        resilience: 10,
        maxKg: 600,
        unobtainable: false
    },
    {
        name: "Stone Rod",
        identifier: "stone",
        lure: -25,
        luck: 10,
        control: 0,
        resilience: 5,
        maxKg: 900,
        unobtainable: false
    },
    {
        name: "Fast Rod",
        identifier: "fast",
        lure: 45,
        luck: -15,
        control: 0.05,
        resilience: -12,
        maxKg: 175,
        unobtainable: false
    },
    {
        name: "Lucky Rod",
        identifier: "lucky",
        lure: -30,
        luck: 60,
        control: 0.05,
        resilience: -12,
        maxKg: 175,
        unobtainable: false
    },
    {
        name: "Steady Rod",
        identifier: "steady",
        lure: -60,
        luck: 35,
        control: 0.05,
        resilience: 30,
        maxKg: 100_000,
        unobtainable: false
    },
    {
        name: "Fortune Rod",
        identifier: "fortune",
        lure: -35,
        luck: 110,
        control: 0,
        resilience: -15,
        maxKg: 700,
        unobtainable: false
    },
    {
        name: "Rapid Rod",
        identifier: "rapid",
        lure: 72,
        luck: -20,
        control: 0,
        resilience: -20,
        maxKg: 700,
        unobtainable: false
    },
    {
        name: "Nocturnal Rod",
        identifier: "nocturnal",
        lure: -10,
        luck: 70,
        control: 0,
        resilience: 0,
        maxKg: 2_000,
        unobtainable: false
    },
    {
        name: "Aurora Rod",
        identifier: "aurora",
        lure: 10,
        luck:60,
        control: 0.06,
        resilience: 6,
        maxKg: 6_000,
        unobtainable: false
    },
    {
        name: "Rod of the Depths",
        identifier: "depths",
        lure: 65,
        luck: 130,
        control: 0.15,
        resilience: 10,
        maxKg: 30_000,
        unobtainable: false
    },
    {
        name: "Magnet Rod",
        identifier: "magnet",
        lure: -10,
        luck: 0,
        control: 0.05,
        resilience: 0,
        maxKg: 10_000,
        unobtainable: false
    },
    {
        name: "Kings Rod",
        identifier: "kings",
        lure: -45,
        luck: 55,
        control: 0.15,
        resilience: 35,
        maxKg: Infinity,
        unobtainable: false
    },
    {
        name: "Destiny Rod",
        identifier: "destiny",
        lure: -10,
        luck: 250,
        control: 0,
        resilience: 0,
        maxKg: 70_000,
        unobtainable: false
    },
    {
        name: "Midas Rod",
        identifier: "midas",
        lure: 60,
        luck: 10,
        control: 0,
        resilience: -20,
        maxKg: 4_000,
        unobtainable: false
    },
    {
        name: "Mythical Rod",
        identifier: "mythical",
        lure: 0,
        luck: 45,
        control: 0.05,
        resilience: 0,
        maxKg: 2_000,
        unobtainable: false
    },
    {
        name: "Reinforced Rod",
        identifier: "reinforced",
        lure: 0,
        luck: 25,
        control: 0.05,
        resilience: 0,
        maxKg: Infinity,
        unobtainable: false
    },
    {
        name: "Trident Rod",
        identifier: "trident",
        lure: 20,
        luck: 150,
        control: 0,
        resilience: 0,
        maxKg: 6_000,
        unobtainable: false
    },
    {
        name: "Scurvy Rod",
        identifier: "scurvy",
        lure: 15,
        luck: 50,
        control: 0,
        resilience: 15,
        maxKg: 2_000,
        unobtainable: false
    },
    {
        name: "Phoenix Rod",
        identifier: "phoenix",
        lure: 55,
        luck: 35,
        control: 0.05,
        resilience: -10,
        maxKg: 4_000,
        unobtainable: false
    },
    {
        name: "Magma Rod",
        identifier: "magma",
        lure: -70,
        luck: 15,
        control: 0,
        resilience: 0,
        maxKg: 1_200,
        unobtainable: false
    },
    {
        name: "Fungal Rod",
        identifier: "fungal",
        lure: -10,
        luck: 45,
        control: 0,
        resilience: 0,
        maxKg: 200,
        unobtainable: false
    },
    {
        name: "No-Life Rod",
        identifier: "nolife",
        lure: 90,
        luck: 105,
        control: 0.23,
        resilience: 10,
        maxKg: Infinity,
        unobtainable: false
    },
    {
        name: "Sunken Rod",
        identifier: "sunken",
        lure: 30,
        luck:150,
        control: 0.15,
        resilience: 15,
        maxKg: 5_000,
        unobtainable: false
    },
    {
        name: "Antler Rod",
        identifier: "antler",
        lure: 25,
        luck: 45,
        control:0.02,
        resilience: -4,
        maxKg: 200,
        unobtainable: false
    },
    {
        name: "North-Star Rod",
        identifier: "northstar",
        lure: 5,
        luck: 30,
        control: 0.04,
        resilience: 12,
        maxKg: 875,
        unobtainable: false
    },
    {
        name: "Rod of The Forgotten Fang",
        identifier: "forgottenfang",
        lure:78,
        luck:145,
        control: 0.22,
        resilience: 25,
        maxKg: Infinity,
        unobtainable: false
    },
    {
        name: "Rod of The Eternal King",
        identifier: "eternalking",
        lure: 50,
        luck: 160,
        control: 0.175,
        resilience: 15,
        maxKg: 75_000,
        unobtainable: false
    },
    {
        name: "Celestial Rod",
        identifier: "celestial",
        lure: 35,
        luck: 60,
        control: 0.07,
        resilience: 5,
        maxKg: Infinity,
        unobtainable: false
    },
    {
        name: "The Lost Rod",
        identifier: "lost",
        lure:15,
        luck:25,
        control: 0.08,
        resilience: 8,
        maxKg: 55_000,
        unobtainable: false
    },
    {
        name: "Voyager Rod",
        identifier: "voyager",
        lure: 25,
        luck: 85,
        control: 0,
        resilience: 10,
        maxKg: Infinity,
        unobtainable: false
    },
    {
        name: "Riptide Rod",
        identifier: "riptide",
        lure: 20,
        luck: 25,
        control: 0.05,
        resilience: 5,
        maxKg: 3_500,
        unobtainable: false
    },
    {
        name: "Krampus's Rod",
        identifier: "krampus",
        lure: 30,
        luck: 15,
        control: 0.15,
        resilience: 8,
        maxKg: Infinity,
        unobtainable: false
    },
    {
        name: "Seasons Rod",
        identifier: "seasons",
        lure: 20,
        luck: 35,
        control: 0.03,
        resilience: 10,
        maxKg: 4_000,
        unobtainable: false
    },
    {
        name: "Resourceful Rod",
        identifier: "resourceful",
        lure: 15,
        luck: 20,
        control: -0.01, // WTF first time seeing this
        resilience: 0,
        maxKg: 1_000,
        unobtainable: false
    },
    {
        name: "Wisdom Rod",
        identifier: "wisdom",
        lure: 10,
        luck: 35,
        control: 0.05,
        resilience: 0,
        maxKg: 2_000,
        unobtainable: false
    },
    {
        name: "Precision Rod",
        identifier: "precision",
        lure: 20,
        luck: 150,
        control: 0,
        resilience: 5,
        maxKg: 12_000,
        unobtainable: false
    }
] as const;

export type RodType = typeof rodData[number]['identifier'];

/**
 * Interface for a Fishing Rod with stats
 */
export interface Rod {
    /** Rods Pretty Name */
    name: string;
    /** Rods Identifier */
    identifier: RodType;
    /** Rod's lure speed stat increase from base lure speed (%) */
    lure: number;
    /** Rod's base luck stat increase from base luck (%) */
    luck: number;
    /** Rod's control stat */
    control: number;
    /** Rod's resilience stat */
    resilience: number;
    /** max fish weight the rod can hook */
    maxKg: number;
    /** Wether or not the rod can still be obtained */
    unobtainable: boolean;
    /** Admin Only Rod */
    admin?: boolean;
}

export const rods: Rod[] = rodData.map(rod => ({
    ...rod,
}));