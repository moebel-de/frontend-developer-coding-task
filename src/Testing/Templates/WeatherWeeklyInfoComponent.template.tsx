import { ComponentTemplate } from "./Component.Template";

export class DailyWeatherTemplate {
  constructor(public debug: HTMLElement) { }

  get dayName(): string {
    const elText = this.debug.querySelector('[data-testid="weather-day-name"]')?.textContent;
    return !!elText ? elText.trim() : '';
  }

  get temperature(): string {
    const temperatureText = this.debug.querySelector('[data-testid="weather-temperature"]')?.textContent;
    return !!temperatureText ? temperatureText.trim() : '';
  }

  get icon(): HTMLElement {
    return this.debug.querySelector('i') as HTMLElement;
  }
}

export class WeatherWeeklyInfoComponentTemplate extends ComponentTemplate {
  get DailyWeatherContainer(): HTMLElement {
    return this.root.getByTestId('daily-weather-container');
  }

  get DailyWeatherInfos(): DailyWeatherTemplate[] {
    return this.root.getAllByTestId('weather-info-wrapper').map((el) => new DailyWeatherTemplate(el));
  }
}