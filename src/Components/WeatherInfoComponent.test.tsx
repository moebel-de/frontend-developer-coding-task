import React from 'react';
import { WeatherInfo } from '../Models';
import { WeatherInfoComponentTemplate } from "../Testing";
import { WeatherInfoComponent } from "./WeatherInfoComponent";

describe('[Weather Info Component]', () => {
  let template: WeatherInfoComponentTemplate;
  const weatherInfo: WeatherInfo = {
    coord: {
      lat: 0,
      lon: 0,
    },
    main: {
      temp: 20,
      feels_like: 20,
      humidity: 20,
      pressure: 20,
      temp_max: 20,
      temp_min: 10,
    },
    name: 'Berlin',
    weather: [{
      id: 1,
      main: 'Rain',
      description: 'Rain',
      icon: 'some-icon'
    }],
  };

  describe('[Not Blurred]', () => {
    beforeEach(() => {
      template = new WeatherInfoComponentTemplate(<WeatherInfoComponent weatherInfo={weatherInfo} isInputFocused={false} />)
    });
  
    it('should render', () => {
      expect(template.weatherInfoContainer).toBeTruthy();
      expect(template.weatherInfoContainer).toHaveStyle('filter: blur(0)');
    });
  
    it('should render correct temperature', () => {
      expect(template.weatherTemperature.textContent?.trim()).toBe('20°');
    });
  
    it('should render correct weather icon', () => {
      expect(template.weatherIcon).toHaveClass('wi-rain');
    });
  });

  describe('[Blurred]', () => {
    beforeEach(() => {
      template = new WeatherInfoComponentTemplate(<WeatherInfoComponent weatherInfo={weatherInfo} isInputFocused={true} />)
    });

    it('should blur the content', () => {
      expect(template.weatherInfoContainer).toHaveStyle('filter: blur(10px)');
    });
  });
});
