const weatherData = [
  {
    name: "Clear",
    identifier: "clear",
  },
  {
    name: "Foggy",
    identifier: "foggy",
  },
  {
    name: "Rain",
    identifier: "rain",
  },
  {
    name: "Windy",
    identifier: "windy",
  },
  {
    name: "Eclipse",
    identifier: "eclipse",
  },
  {
    name: "Aurora Borealis",
    identifier: "auroraBorealis",
  },
] as const;

// Automatically generate the union type of the `identifier` values
export type WeatherType = typeof weatherData[number]['identifier'];

/**
 * Interface for weather data
 */
export interface Weather {
  name: string;
  identifier: WeatherType;
}

export const weather: Weather[] = weatherData.map(weather => ({
  ...weather,
}));