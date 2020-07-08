import React, { useState } from 'react';
import { Container, TextInputContainer, Button } from './styles';
import TextInput from '../../components/TextInput';
import WeatherList from '../../components/WeatherList';
import useCityWeather, { DataPayload } from '../../hooks/useCityWeather';
import CityNotFound from '../../components/CityNotFound';
import Icon from '../../components/Icon';

const WeatherSummary = () => {
  const [city, setCity] = useState('London');
  const { weatherData, fetchData } = useCityWeather(city);
  const {
    data: { cod, list },
  } = weatherData as DataPayload;

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onKeyPressText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      fetchData(city);
    }
  };

  return (
    <Container>
      <TextInputContainer>
        <TextInput
          onChange={onChangeText}
          onKeyDown={onKeyPressText}
          value={city}
        />
        <Button>
          <Icon name='direction-right' size='60' />
        </Button>
      </TextInputContainer>
      {cod !== '200' ? <CityNotFound /> : <WeatherList list={list} />}
    </Container>
  );
};

export default WeatherSummary;
