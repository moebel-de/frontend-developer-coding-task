import React, { useState, useEffect } from 'react';
import { Container, TextInputContainer, Button, ListContainer } from './styles';
import TextInput from '../../components/TextInput';
import WeatherList from '../../components/WeatherList';
import useCityWeather, { DataPayload } from '../../hooks/useCityWeather';
import CityNotFound from '../../components/CityNotFound';
import Icon from '../../components/Icon';

type WeatherSummaryProps = {
  changeTemp?: React.Dispatch<React.SetStateAction<number>>;
};

const WeatherSummary: React.FC<WeatherSummaryProps> = ({ changeTemp }) => {
  const [city, setCity] = useState('London');
  const [focus, setFocus] = useState(false);
  const { weatherData, fetchData } = useCityWeather(city);
  const {
    data: { cod, list },
  } = weatherData as DataPayload;

  useEffect(() => {
    if (list && changeTemp) {
      changeTemp(list[0].temp.day);
    }
  }, [list, changeTemp]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onKeyPressText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      fetchData(city);
    }
  };

  const onFocusText = () => {
    setFocus(true);
  };

  const onBlurText = () => {
    setFocus(false);
  };

  return (
    <Container data-testid='weather-summary'>
      <TextInputContainer>
        <TextInput
          onChange={onChangeText}
          onKeyDown={onKeyPressText}
          onFocus={onFocusText}
          onBlur={onBlurText}
          value={city}
        />
        <Button onClick={() => fetchData(city)}>
          <Icon name='direction-right' size='60' />
        </Button>
      </TextInputContainer>
      <ListContainer focus={focus}>
        {cod !== '200' ? <CityNotFound /> : <WeatherList list={list} />}
      </ListContainer>
    </Container>
  );
};

export default WeatherSummary;
