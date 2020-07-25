import React from "react";
import { ReactComponent as IconOne } from "./weather-icons/wi-day-sunny.svg";
import { ReactComponent as IconTwo } from "./weather-icons/wi-day-cloudy.svg";
import { ReactComponent as IconThreeAndFour } from "./weather-icons/wi-cloudy.svg";
import { ReactComponent as IconNine } from "./weather-icons/wi-rain.svg";
import { ReactComponent as IconTen } from "./weather-icons/wi-day-showers.svg";
import { ReactComponent as IconEleven } from "./weather-icons/wi-day-thunderstorm.svg";
import { ReactComponent as IconThirteen } from "./weather-icons/wi-snow-wind.svg";
import { ReactComponent as IconFifty } from "./weather-icons/wi-dust.svg";
import { ReactComponent as IconRight } from "./weather-icons/wi-direction-right.svg";
import { ReactComponent as IconDown } from "./weather-icons/wi-direction-down.svg";
import { ReactComponent as IconUp } from "./weather-icons/wi-direction-up.svg";
import { WeatherIconStyle } from "./style";

export const Icons: {
  [key: string]: React.FunctionComponent;
} = {
  "01d": IconOne,
  "02d": IconTwo,
  "03d": IconThreeAndFour,
  "04d": IconThreeAndFour,
  "09d": IconNine,
  "10d": IconTen,
  "11d": IconEleven,
  "13d": IconThirteen,
  "50d": IconFifty,
  right: IconRight,
  down: IconDown,
  up: IconUp,
};

export const getIconElement = (code: string): React.FunctionComponent | null =>
  Icons[code] ? Icons[code] : null;

export const DEFAULT_WEATHER_ICON_SIZE = 100;

export const WeatherIcon: React.FC<{ code: string; sizeInPx?: number }> = ({
  code,
  sizeInPx = DEFAULT_WEATHER_ICON_SIZE,
}) => {
  const Icon = getIconElement(code);
  if (!Icon) return null;
  return (
    <WeatherIconStyle sizeInPx={sizeInPx}>
      <Icon />
    </WeatherIconStyle>
  );
};
