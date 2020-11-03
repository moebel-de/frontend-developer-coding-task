import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

export class ComponentTemplate {
  private debugElement: RenderResult;

  constructor(el: ReactElement | RenderResult) {
    this.debugElement = 'props' in el ? render(el) : el;
  }

  get root(): RenderResult {
    return this.debugElement;
  }
}
