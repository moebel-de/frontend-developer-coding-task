import React from "react";

import { WeekDayWeather } from "../../types/weather";
import { WeekDays } from "../WeekDays";
import { FeaturedDay } from "../FeaturedDay";
import { Container, Wrapper } from "./styles";
import Loader from "./Loader";

interface Props {
  isBlurred: boolean;
  isLoading: boolean;
  today?: WeekDayWeather;
  nextDays?: WeekDayWeather[];
}

function ForecastBoard({ today, nextDays, isBlurred, isLoading }: Props) {
  return (
    <Wrapper isBlurred={isBlurred}>
      <Container>
        {!today && isLoading && <Loader />}

        {today && (
          <FeaturedDay
            id={today.id}
            title={today.name}
            description={today.description}
            iconId={today.iconId}
            temperature={Math.round(today.temperature)}
          />
        )}

        {nextDays && <WeekDays days={nextDays} />}
      </Container>
    </Wrapper>
  );
}

export default ForecastBoard;
