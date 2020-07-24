import { useState, useEffect } from "react";

import { getCityCoordinates, getWeeklyForecast } from "../api";
import { WeekDayWeather } from "../types/weather";
import { normalizeWeeklyForecastData } from "./normalize-weekly-forecast-data";

export type Data = {
  today: WeekDayWeather;
  nextDays: WeekDayWeather[];
};

interface State {
  data: Data | null;
  isFetching: boolean;
  error: string | null;
}

export function useWeeklyForecast(
  initialCity: string,
  nextDaysCount: number = 4
): [State, React.Dispatch<React.SetStateAction<string>>] {
  const [city, setCity] = useState(initialCity);
  const [data, setData] = useState<Data | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const state: State = {
    data,
    isFetching,
    error,
  };

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      try {
        setError(null);
        setIsFetching(true);

        const coord = await getCityCoordinates(city);
        const weather = await getWeeklyForecast(coord.lat, coord.lon);

        if (!didCancel) {
          setData(normalizeWeeklyForecastData(weather, nextDaysCount));
          setIsFetching(false);
        }
      } catch (error) {
        if (!didCancel) {
          setError(error.message);
          setIsFetching(false);
        }
      }
    }

    if (city) {
      fetchData();
    } else {
      setData(null);
      setError(null);
    }

    return () => {
      didCancel = true;
    };
  }, [city, nextDaysCount]);

  return [state, setCity];
}
