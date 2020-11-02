import { ComponentTemplate } from './Component.Template';

export class BackgroundComponentTemplate extends ComponentTemplate {
  get backgroundElement(): HTMLDivElement {
    return this.root.getByTestId('app-background-div') as HTMLDivElement;
  }

  get children(): Array<Element> {
    return Array.from(this.backgroundElement.children);
  }
}