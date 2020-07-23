import { ChangeEvent, FocusEvent } from "react";

type FocusBlurHandler = (
  event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLButtonElement>
) => void;

export interface CitySearchFieldProps {
  value: string;
  onSearch: () => void;
  onBlur?: FocusBlurHandler;
  onFocus?: FocusBlurHandler;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
