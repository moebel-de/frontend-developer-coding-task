import React, { FormEvent } from "react";

import {
  Label,
  Input,
  ArrowIcon,
  Container,
  SearchBox,
  SubmitButton,
} from "./styles";
import { CitySearchFieldProps } from "./types";

function CitySearch({
  value,
  onBlur,
  onFocus,
  onChange,
  onSearch,
}: CitySearchFieldProps) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <Container onSubmit={onSubmit}>
      <Label htmlFor="search-city">
        Type in your location and we tell you what weather to expect.
      </Label>
      <SearchBox>
        <Input
          value={value}
          type="search"
          id="search-city"
          autoComplete="off"
          onBlur={onFocus}
          onFocus={onBlur}
          onChange={onChange}
          placeholder="Enter a city name"
          data-testid="city-search-input"
        />
        <SubmitButton
          type="submit"
          data-testid="city-search-submit-btn"
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <ArrowIcon data-testid="city-search-arrow-icon" />
        </SubmitButton>
      </SearchBox>
    </Container>
  );
}

export default CitySearch;
