import React from "react";

import { WeekDayWeather } from "../../types/weather";
import { WeekDay } from "../WeekDay";

interface Props {
  days: WeekDayWeather[];
}

function WeekDays({ days }: Props) {
  return (
    <div>
      {days.map((weather) => (
        <WeekDay
          id={weather.date.toString()}
          key={weather.date}
          title={weather.name}
          iconId={weather.iconId}
          description={weather.description}
          temperature={Math.round(weather.temperature)}
          day={new Date(weather.date * 1000).toLocaleString(
            window.navigator.language,
            { weekday: "long" }
          )}
        />
      ))}
    </div>
  );
}

export default WeekDays;
