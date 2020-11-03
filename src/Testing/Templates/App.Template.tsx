import { BackgroundComponentTemplate, CityInputComponentTemplate, ComponentTemplate } from "./Components";

export class AppTemplate extends ComponentTemplate {
  get logoImg(): HTMLImageElement {
    return this.root.getByTestId('app-logo') as HTMLImageElement;
  }

  get backgroundComponent(): BackgroundComponentTemplate {
    return new BackgroundComponentTemplate(this.root);
  }

  get cityInput(): CityInputComponentTemplate {
    return new CityInputComponentTemplate(this.root);
  }
}