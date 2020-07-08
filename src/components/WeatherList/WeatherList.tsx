import React from 'react';
import { Container, Today } from './styles';
import WeatherItem from '../WeatherItem';
import Icon from '../Icon';
import TempLabel from '../TempLabel';
import { Size } from '../TempLabel/styles';

interface WeatherListProps {
  list: any;
}

type WeatherItemProps = {
  item: any;
  index: number;
};

const WeatherList: React.FC<WeatherListProps> = ({ list }) => {
  return (
    <Container>
      {list.map((item: any, index: number) =>
        index === 0 ? (
          <Today key={item.dt}>
            <Icon name={item.weather[0].id} size='60' />
            <TempLabel degree={item.temp.day} size={Size.big} />
          </Today>
        ) : (
          <WeatherItem key={item.dt} item={item} />
        )
      )}
    </Container>
  );
};

export default WeatherList;
