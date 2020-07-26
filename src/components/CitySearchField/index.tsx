import React, { ChangeEvent } from "react";
import { Container, Input, Label, Button } from "./styles";
import { WeatherIcon } from "../WeatherIcon";

type Props = {
  value?: string;
  onSubmit: () => void;
  setFocus: (x: boolean) => void;
  onChange: (newValue: string) => void;
};

export const CitySearchField: React.FC<Props> = ({
  value,
  onChange,
  onSubmit,
  setFocus,
}) => {
  const disabled = !value;
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      onSubmit();
    } else {
      setFocus(true);
    }
  };
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  return (
    <>
      <Label htmlFor="citySearch">
        Type in your location and we tell you what weather to expect.
      </Label>
      <Container>
        <Input
          tabIndex={0}
          // autoFocus
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          name={"citySearch"}
          id="citySearch"
          autoComplete={"off"}
          value={value}
          onKeyPress={onKeyPress}
          onChange={onChangeValue}
        />
        <Button
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onSubmit}
          disabled={disabled}
        >
          <WeatherIcon sizeInPx={58} code="right" />
        </Button>
      </Container>
    </>
  );
};
