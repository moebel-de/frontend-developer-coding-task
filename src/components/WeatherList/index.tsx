import React, { useState } from "react";
import { WeatherIcon } from "../WeatherIcon";
import { OuterContainer, InnerContainer, TodayContainer } from "./styles";
import { WeatherData } from "../../types";

export interface xxx {
  list: [{ temp: number; dt: number }];
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const ErrorComponent: React.FC<{ errorMessage: string }> = ({
  errorMessage,
}) => {
  return (
    <OuterContainer>
      <div className="error">
        <h2>Error :-(</h2>
        <p>{errorMessage}</p>
      </div>
    </OuterContainer>
  );
};

export interface WeatherListProps {
  isBlurred?: boolean;
  data?: WeatherData[];
  errorMessage?: string;
  loading?: boolean;
}

export const FORCAST_SIZE = 5;

export const WeatherList: React.FC<WeatherListProps> = ({
  isBlurred,
  data,
  errorMessage,
  loading,
}) => {
  const [all, showAll] = useState(false);
  const onClick = () => {
    showAll((sa) => !sa);
  };

  if (loading) {
    return (
      <OuterContainer>
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      </OuterContainer>
    );
  }

  if (!data || data.length < 2 || errorMessage) {
    if (errorMessage) {
      return <ErrorComponent errorMessage={errorMessage} />;
    } else {
      return null;
    }
  }

  const toDay = data[0];
  const childs = data
    .slice(1, all ? data.length : FORCAST_SIZE)
    .map(({ temp: { day }, dt, weather }) => {
      return (
        <InnerContainer key={dt}>
          <div>{days[new Date(dt * 1000).getDay()]}</div>
          <div>{Math.round(day)}°</div>
          <div>
            <WeatherIcon sizeInPx={60} code={weather[0].icon}></WeatherIcon>
          </div>
        </InnerContainer>
      );
    });

  return (
    <OuterContainer isBlurred={isBlurred}>
      <TodayContainer>
        <WeatherIcon sizeInPx={60} code={toDay.weather[0].icon}></WeatherIcon>
        <div>{Math.round(toDay.temp.day)}°</div>
      </TodayContainer>
      {childs}
      <InnerContainer onClick={onClick}>
        <div>show {all ? "less" : "more"}</div>
        <div></div>
        <div>
          <WeatherIcon
            sizeInPx={all ? 40 : 60}
            code={all ? "up" : "down"}
          ></WeatherIcon>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
};
