import React from 'react';
import { fireEvent, wait } from '@testing-library/react';

import App from '../../App';
import { WeatherApiService } from '../../Services';
import { AppTemplate, BackgroundComponentTemplate } from "../Templates";
import { weatherInfoMock, weeklyWeatherInfoMock } from '../Mocks';
import { WeatherInfo } from '../../Models';

// Integration tests
describe('[App Background]', () => {
  const mockGetCurrentWeather = jest.fn();
  const mockGetWeeklyWeather = jest.fn();

  let appTemplate: AppTemplate;
  let bgTemplate: BackgroundComponentTemplate;

  beforeAll(() => {
    jest.mock('../../Services');
    
    mockGetCurrentWeather.mockReturnValue(new Promise((resolve) => resolve(weatherInfoMock)));
    mockGetWeeklyWeather.mockReturnValue(new Promise((resolve) => resolve(weeklyWeatherInfoMock)))

    WeatherApiService.prototype.getCurrentWeather = mockGetCurrentWeather;
    WeatherApiService.prototype.getWeeklyWeather = mockGetWeeklyWeather;
  });

  beforeEach(() => {
    appTemplate = new AppTemplate(<App />);
    bgTemplate = new BackgroundComponentTemplate(appTemplate.root);
  });

  it('Check the mocks', async() => {
    const weatherApi = new WeatherApiService();
    const result = await weatherApi.getCurrentWeather('Munich');
    const weeklyResult = await weatherApi.getWeeklyWeather(10, 10);

    expect(mockGetCurrentWeather).toBeCalledWith('Munich');
    expect(mockGetWeeklyWeather).toBeCalledWith(10, 10);

    expect(result).toEqual(weatherInfoMock);
    expect(weeklyResult).toEqual(weeklyWeatherInfoMock);
  });

  it('should render background component', () => {
    expect(bgTemplate.backgroundElement).toBeTruthy();
  });

  describe('[Weather] is higher than 15', () => {
    beforeEach(() => {
      mockGetCurrentWeather.mockReturnValue(new Promise((resolve) => resolve({
        ...weatherInfoMock,
        main: {
          ...weatherInfoMock.main,
          temp: 20,
        },
      } as WeatherInfo)));

      mockGetCurrentWeather.mockClear();
    });

    it('should keep color yellowish when weather is over 15', async () => {
      appTemplate.cityInput.inputValue = 'Hamburg';
      expect(appTemplate.cityInput.inputValue).toBe('Hamburg');
      
      fireEvent.keyPress(appTemplate.cityInput.inputElement, { key: "Enter", code: 13, charCode: 13 });
      expect(mockGetCurrentWeather).toBeCalled();
      expect(bgTemplate.backgroundElement)
        .toHaveStyle('background: linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%)');
    });
  });

  describe('[Weather] is lower than 15', () => {
    beforeEach(() => {
      mockGetCurrentWeather.mockClear();
    });

    it('should keep color greenish when weather is over 15', async () => {
      appTemplate.cityInput.inputValue = 'Hamburg';
      expect(appTemplate.cityInput.inputValue).toBe('Hamburg');
      
      fireEvent.keyPress(appTemplate.cityInput.inputElement, { key: "Enter", code: 13, charCode: 13 });
      expect(mockGetCurrentWeather).toBeCalled();
      expect(bgTemplate.backgroundElement)
        .toHaveStyle('background: linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%)');
    });
  });
});
