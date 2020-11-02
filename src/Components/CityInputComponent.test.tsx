import React from 'react';
import { fireEvent, wait } from '@testing-library/react';
import { CityInputComponentTemplate } from "../Testing";
import { CityInputComponent } from './CityInputComponent';

describe('[City Input Component]', () => {
  let template: CityInputComponentTemplate;  
  const setIsInputFocusedMock = jest.fn();
  const onChange = jest.fn();
  const fetchWeather = jest.fn();

  beforeEach(() => {
    template = new CityInputComponentTemplate(
      <CityInputComponent city="Berlin" onChange={onChange} fetchWeather={fetchWeather} 
        setIsInputFocused={setIsInputFocusedMock} />
    );
  });

  it('should render CityInputComponent', () => {
    expect(template.root).toBeTruthy();
  });

  it('should render correct label of input field', () => {
    expect(template.inputLabel.textContent?.trim()).toBe('Type in your location and we will tell you what weather to expect.');
  });

  describe('[input]', () => {
    it('should render correct initial value for input field', () => {
      expect(template.inputValue).toBe('Berlin');
    });
  
    it('should set new value to input field', () => {
      template.inputValue = 'Munich';
      expect(template.inputValue).toBe('Munich');
    });
  
    it('should clean input value', () => {
      template.inputValue = '';
      expect(template.inputValue).toBe('');
      expect(template.inputElement.placeholder).toBe('Type your city');
    });
  
    it('should call onChange when changed', async () => {
      fireEvent.change(template.inputElement, {target: { value: "Munich" }});
      expect(onChange).toBeCalledWith('Munich');
    });

    describe('[focus events]', () => {
      it('should call setIsInputFocused on input focus', () => {
        template.inputElement.focus();
        expect(setIsInputFocusedMock).toBeCalledWith(true);
      });
    
      it('should call setIsInputFocused on input blur', () => {
        template.inputElement.focus();
        template.inputElement.blur();
        expect(setIsInputFocusedMock).toBeCalledWith(false);
      });
    });

    describe('[keypress events]', () => {
      it('should not call fetchWeather when any key except enter is pressed', () => {
        fireEvent.keyPress(template.inputElement, { key: "Space", code: 32, charCode: 32 });
        expect(fetchWeather).not.toBeCalled();
      });

      describe('[Enter Key]', () => {
        beforeEach(() => {
          fireEvent.keyPress(template.inputElement, { key: "Enter", code: 13, charCode: 13 });
        });

        it('should call fetchWeather when enter key is pressed', () => {
          expect(fetchWeather).toBeCalled();
        });

        it('should call blur on enter key is pressed', () => {
          expect(setIsInputFocusedMock).toBeCalledWith(false);
        });
      });
    });
  });

  describe('[Arrow Icon]', () => {
    it('should render', () => {
      expect(template.inputArrow).toBeTruthy();
    });

    it('should trigger fetchWeather on click', () => {
      fireEvent.click((template.inputArrow) as HTMLElement);
      expect(fetchWeather).toBeCalled();
    });

    // TODO Will be cool to find a way to select pseudo elements and their styles
    // Its not critical at this moment, but would not harm to test also the mouse enter animation
    // of the arrow
  });
});
