import React from 'react';
import App from './App';
import { AppTemplate, BackgroundComponentTemplate } from './Testing';

describe('[App]', () => {
  let template: AppTemplate;

  beforeEach(() => {
    template = new AppTemplate(<App />);
  });

  it('should render the App', () => {
    expect(template.root).toBeTruthy();
  });

  it('should render the App logo', () => {
    expect(template.logoImg).toBeTruthy();
  });

  describe('[Background Component]', () => {
    it('should render background component with default colors', () => {
      expect(template.backgroundComponent.backgroundElement)
        .toHaveStyle('background: linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%)');
    });
  
    it('should render background component with correct number of children', () => {
      expect(template.backgroundComponent.children.length).toBe(3);
    });
  });
});