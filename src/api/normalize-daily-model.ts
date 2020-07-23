import { WeekDayWeather } from "../types/weather";
import { Daily } from "./types";

export function normalizDailyModel(days: Daily[]): WeekDayWeather[] {
  return days.map((item) => {
    const weather = item.weather[0];

    return {
      id: item.dt.toString(),
      date: item.dt,
      description: weather.description,
      iconId: weather.id,
      name: weather.main,
      temperature: item.temp.day,
    };
  });
}
