import React, { useState, FocusEvent, ChangeEvent } from "react";

import { AppHeader } from "./components/AppHeader";
import { CitySearchField } from "./components/CitySearchField";
import { useWeeklyForecast } from "./hooks/use-weekly-forecast";

const INITILA_CITY = "Hamburg";

function App() {
  const [searchTerm, setSearchTerm] = useState(INITILA_CITY);
  const [isFocusedSearchInput, setIsFocusedSearchInput] = useState(false);
  const [{ data, isFetching, error }, setCity] = useWeeklyForecast(
    INITILA_CITY
  );

  console.log({ data, isFetching, error });

  const handleSearchFieldFocusToggle = (
    event: FocusEvent<HTMLButtonElement> | FocusEvent<HTMLInputElement>
  ) => {
    if (event.type === "focus") {
      setIsFocusedSearchInput(true);
    } else {
      setIsFocusedSearchInput(false);
    }
  };

  const handleSearchInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (!isFocusedSearchInput) {
      setIsFocusedSearchInput(true);
    }
  };

  const handleSearch = () => {
    setCity(searchTerm);
    setIsFocusedSearchInput(false);
  };

  return (
    <>
      <AppHeader />
      <CitySearchField
        value={searchTerm}
        onSearch={handleSearch}
        onChange={handleSearchInputOnChange}
        onBlur={handleSearchFieldFocusToggle}
        onFocus={handleSearchFieldFocusToggle}
      />
    </>
  );
}

export default App;
