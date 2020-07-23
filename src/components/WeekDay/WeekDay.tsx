import React from "react";

import { WeatherIcon } from "../WeatherIcon";
import { IconSize } from "../WeatherIcon/types";
import { Container, Temperature, Day } from "./styles";

interface Props {
  id: string;
  description: string;
  iconId: number;
  temperature: number;
  title: string;
  day: string;
}

function WeekDay({ id, description, iconId, temperature, title, day }: Props) {
  return (
    <Container>
      <Day>{day}</Day>
      <Temperature>{temperature}</Temperature>
      <WeatherIcon
        id={id}
        iconId={iconId}
        size={IconSize.xlarge}
        title={title}
        description={description}
      />
    </Container>
  );
}

export default WeekDay;
