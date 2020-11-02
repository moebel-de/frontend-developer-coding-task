import { ComponentTemplate } from "./Component.Template";

export class CityInputComponentTemplate extends ComponentTemplate {
  get inputArrow(): HTMLElement | null {
    return this.root.getByTestId('city-input-arrow');
  }

  get inputLabel(): HTMLElement {
    return this.root.getByTestId('city-input-label');
  }

  get inputElement(): HTMLInputElement {
    return this.root.getByTestId('city-input-field') as HTMLInputElement;
  }

  get inputValue(): string {
    return this.inputElement.value.trim();
  }

  set inputValue(value: string) {
    this.inputElement.focus();

    // Simulate keypress events in case there are methods bind on it
    // Currently no methods bind, but in future may be
    for (let char of value) {
      this.inputElement.dispatchEvent(new KeyboardEvent('keypress', { key: char, bubbles: true }));
    }

    this.inputElement.value = value;
    this.inputElement.dispatchEvent(new Event('change', { bubbles: true }));
  }
}
