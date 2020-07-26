import React, { useState, useEffect, useCallback } from "react";
import { CitySearchField } from "../components/CitySearchField";
import { INITIAL_CITY } from "../config";
import { getWeatherData } from "../api";
import { WeatherData } from "../types";
import { WeatherList } from "../components/WeatherList";

interface InternalState {
  loading: boolean;
  data?: WeatherData[];
  errorMessage?: string;
}

export const WeatherSearch: React.FC<{ onTempChange: (t: number) => void }> = ({
  onTempChange,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [city, setCity] = useState(INITIAL_CITY);

  const [{ data, loading, errorMessage }, setWeather] = useState<InternalState>(
    {
      loading: true,
      data: undefined,
      errorMessage: undefined,
    },
  );

  const onSubmit = useCallback(async () => {
    try {
      setWeather((w) => ({ loading: true }));
      const result = await getWeatherData(city);
      if (!result) {
        setWeather((w) => ({
          ...w,
          loading: false,
          data: undefined,
          errorMessage: city + " not found",
        }));
      } else {
        setWeather((w) => ({
          ...w,
          loading: false,
          data: result.list,
          errorMessage: undefined,
        }));
      }
    } catch (e) {
      setWeather((w) => ({
        ...w,
        loading: false,
        data: undefined,
        errorMessage:
          e.message === "unauthorized" ? "No API given!" : e.message,
      }));
    }
    setFocused(false);
  }, [city]);

  useEffect(() => {
    if (INITIAL_CITY === city) {
      onSubmit();
    }
  }, [city, onSubmit]);
  useEffect(() => {
    if (data) {
      onTempChange(data[0].temp.day);
    }
  }, [data, onTempChange]);

  const setFocus = (f: boolean) => {
    setFocused(f);
  };
  const onChange = (s: string) => {
    setCity(s);
    setFocused(true);
  };

  return (
    <>
      <CitySearchField
        onChange={onChange}
        setFocus={setFocus}
        onSubmit={onSubmit}
        value={city}
      />
      <WeatherList
        isBlurred={isFocused}
        data={data}
        loading={loading}
        errorMessage={errorMessage}
      />
    </>
  );
};
