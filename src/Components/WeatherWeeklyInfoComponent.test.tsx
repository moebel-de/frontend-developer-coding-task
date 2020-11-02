import React from 'react';
import { WeatherDailyInfo } from '../Models';
import { WeatherWeeklyInfoComponentTemplate } from "../Testing";
import { WeatherWeeklyInfoComponent } from './WeatherWeeklyInfoComponent';

describe('[Weather Weekly Info Component]', () => {
  let template: WeatherWeeklyInfoComponentTemplate;
  const weatherDailyInfo:Array<WeatherDailyInfo> = [
    {dt: 1604275200, temp: { day: 20, eve: 20, max: 20, min: 20, night: 20 }, weather: [{ id: 0, icon: 'rain', main: 'Rain', description: 'rain' }]},
    {dt: 1604361600, temp: { day: 30, eve: 20, max: 20, min: 20, night: 20 }, weather: [{ id: 0, icon: 'snow', main: 'Snow', description: 'snow' }]},
  ];

  describe('[Not Blurred]', () => {
    beforeEach(() => {
      template = new WeatherWeeklyInfoComponentTemplate(
        <WeatherWeeklyInfoComponent weatherDailyInfo={weatherDailyInfo} isInputFocused={false} />
      );
    });

    it('should render', () => {
      expect(template.DailyWeatherContainer).toBeTruthy();
      expect(template.DailyWeatherContainer).toHaveStyle('filter: blur(0)');
    });

    it('should render correct day names', () => {
      expect(template.DailyWeatherInfos.map((dailyWeather) => dailyWeather.dayName)).toEqual(['Monday', 'Tuesday']);
    });

    it('should render correct temperatures', () => {
      expect(template.DailyWeatherInfos.map((dailyWeather) => dailyWeather.temperature)).toEqual(['20°', '30°']);
    });

    it('should render correct icons', () => {
      const classes = template.DailyWeatherInfos.map((dailyWeather) => dailyWeather.icon.classList);
      expect(classes[0]).toContain('wi-rain');
      expect(classes[1]).toContain('wi-snow');
    });
  });

  describe('[Blurred]', () => {
    beforeEach(() => {
      template = new WeatherWeeklyInfoComponentTemplate(
        <WeatherWeeklyInfoComponent weatherDailyInfo={weatherDailyInfo} isInputFocused={true} />
      );
    });

    it('should render the content blurred', () => {
      expect(template.DailyWeatherContainer).toBeTruthy();
      expect(template.DailyWeatherContainer).toHaveStyle('filter: blur(10px)');
    });
  });
});
