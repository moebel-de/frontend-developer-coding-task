import { ComponentTemplate } from "./Component.Template";

export class WeatherInfoComponentTemplate extends ComponentTemplate {
  get weatherInfoContainer(): HTMLElement {
    return this.root.getByTestId('weather-info-container');
  }

  get weatherTemperature(): HTMLElement {
    return this.root.getByTestId('weather-temperature');
  }

  get weatherIcon(): HTMLElement {
    return this.root.getByTestId('weather-icon');
  }
}