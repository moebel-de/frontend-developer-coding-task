import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

export class ComponentTemplate {
  private debugElement: RenderResult;

  constructor(el: ReactElement) {
    this.debugElement = render(el);
  }

  get root(): RenderResult {
    return this.debugElement;
  }
}