import React, { useState, useCallback } from 'react';
import { fetchWeather } from '../api';

export type DataProps = {
  cod: string;
  list: Array<any>;
};

export interface DataPayload {
  fetchData: Function;
  state: string;
  error: '';
  data: DataProps;
}

export default (city: string) => {
  const [weatherData, setWeatherData] = useState({
    state: 'LOADING',
    error: '',
    data: {},
  });

  const setPartData = (partialData: any) =>
    setWeatherData({ ...weatherData, ...partialData });

  const fetchData = useCallback(
    (value) => {
      setPartData({
        state: 'LOADING',
        error: '',
        data: {},
      });
      fetchWeather(value)
        .then((resp) => resp.json())
        .then(({ list, cod, message }) => {
          setPartData({
            state: 'SUCCESS',
            data: { list, cod, message },
          });
        })
        .catch((err) =>
          setPartData({
            state: 'ERROR',
            error: 'Fetch failed',
          })
        );
    },
    [setPartData]
  );

  React.useEffect(() => {
    fetchData(city);
  }, []);

  return { weatherData, fetchData };
};
