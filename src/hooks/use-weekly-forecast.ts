import { useState, useEffect } from "react";

import * as api from "../api";
import { WeeklyForecast } from "../api/types";
import { WeekDayWeather } from "../types/weather";

type Data = {
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

        const coord = await api.getCityCoordinates(city);
        const weather = await api.getWeeklyForecast(coord.lat, coord.lon);

        if (!didCancel) {
          setData(normalizeData(weather, nextDaysCount));
        }
      } catch (error) {
        if (!didCancel) {
          setError(error.message);
        }
      } finally {
        setIsFetching(false);
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

function normalizeData(data: WeeklyForecast, nextDaysCount: number): Data {
  const today: WeekDayWeather = api.normalizeCurrentModel(data.current);
  const nextDays: WeekDayWeather[] = api.normalizDailyModel(
    data.daily.slice(1, nextDaysCount + 1)
  );

  return { today, nextDays };
}
