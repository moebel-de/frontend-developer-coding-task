import { WeekDayWeather } from "../types/weather";
import { CurrentDay } from "./types";

export function normalizeCurrentModel(currentDay: CurrentDay): WeekDayWeather {
  const weather = currentDay.weather[0];

  return {
    id: currentDay.dt.toString(),
    date: currentDay.dt,
    temperature: currentDay.temp,
    iconId: weather.id,
    name: weather.main,
    description: weather.description,
  };
}
