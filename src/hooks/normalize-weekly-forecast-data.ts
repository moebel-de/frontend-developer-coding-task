import { WeekDayWeather } from "../types/weather";
import { Data } from "./use-weekly-forecast";
import { WeeklyForecast } from "../api/types";

import { normalizeCurrentModel, normalizDailyModel } from "../api";

export function normalizeWeeklyForecastData(
  data: WeeklyForecast,
  nextDaysCount: number
): Data {
  const today: WeekDayWeather = normalizeCurrentModel(data.current);
  const nextDays: WeekDayWeather[] = normalizDailyModel(
    data.daily.slice(1, nextDaysCount + 1)
  );

  return { today, nextDays };
}
