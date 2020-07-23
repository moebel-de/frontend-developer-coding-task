import React from "react";

import { WeatherIcon } from "../WeatherIcon";
import { IconSize } from "../WeatherIcon/types";
import { Container, Temperature } from "./styles";

interface Props {
  id: string;
  title: string;
  iconId: number;
  description: string;
  temperature: number;
}

function FeaturedDay({ id, description, iconId, temperature, title }: Props) {
  return (
    <Container>
      <WeatherIcon
        id={id}
        title={title}
        iconId={iconId}
        size={IconSize.xxlarge}
        description={description}
      />
      <Temperature>{temperature}</Temperature>
    </Container>
  );
}

export default FeaturedDay;
