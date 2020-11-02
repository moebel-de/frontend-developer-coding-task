import { wait } from '@testing-library/react';
import React from 'react';

import { BackgroundComponentTemplate } from '../Testing';
import { BackgroundComponent } from './BackgroundComponent';

describe('[Background Component]', () => {
  let template: BackgroundComponentTemplate;

  it('should render the background component', () => {
    template = new BackgroundComponentTemplate(<BackgroundComponent children={[]} />);
    expect(template.backgroundElement).toBeTruthy();
  });

  describe('[children]', () => {
    const children = [
      <div key="test-1" data-testid="app-background-child"><span>test</span></div>,
      <div key="test-2" data-testid="app-background-child"><span>test</span></div>
    ];

    it('should render with children', async () => {
      template = new BackgroundComponentTemplate(<BackgroundComponent children={children} />);
      expect(template.children.length).toBe(2);
      expect(template.children.map((el) => el.textContent?.trim())).toEqual(['test', 'test']);
    });

    it('should not render children if they are not given', async () => {
      template = new BackgroundComponentTemplate(<BackgroundComponent children={[]} />);
      expect(template.children.length).toBe(0);
    });
  });

  describe('[temperature]', () => {
    it('should render with default background', () => {
      template = new BackgroundComponentTemplate(<BackgroundComponent children={[]} />);
      expect(template.backgroundElement)
        .toHaveStyle('background: linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%)');
    });

    it('should render greenish background when temperature less than 15', () => {
      template = new BackgroundComponentTemplate(<BackgroundComponent children={[]} temperature={12} />);
      expect(template.backgroundElement)
        .toHaveStyle('background: linear-gradient(-180deg, rgb(176, 247, 220) 0%, rgb(223, 210, 127) 100%)');
    });

    it('should render yellowish background when temperature is more than 15', () => {
      template = new BackgroundComponentTemplate(<BackgroundComponent children={[]} temperature={16} />);
      expect(template.backgroundElement)
        .toHaveStyle('background: linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%)');
    });
  });
});
