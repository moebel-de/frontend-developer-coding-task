import React from 'react';
import { Container, ForecastTemp, DayOfWeek } from './styles';
import Icon from '../Icon';
import TempLabel from '../TempLabel';
import { Size } from '../TempLabel/styles';
import format from 'date-fns/format';

type WeatherItemProps = {
  item: any;
};

const WeatherItem: React.FC<WeatherItemProps> = ({ item }) => {
  const formatDate = () => {
    return format(new Date(item.dt * 1000), 'EEEE');
  };

  return (
    <Container>
      <DayOfWeek>{formatDate()}</DayOfWeek>
      <ForecastTemp>
        <TempLabel degree={item.temp.day} size={Size.normal} />
        <Icon name={item.weather[0].id} size='60' />
      </ForecastTemp>
    </Container>
  );
};

export default WeatherItem;
