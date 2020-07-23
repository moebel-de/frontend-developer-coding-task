import React, { useState, FocusEvent, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";

import { AppHeader } from "./components/AppHeader";
import { ForecastBoard } from "./components/ForecastBoard";
import { AppBackground } from "./components/AppBackground";
import { CitySearchField } from "./components/CitySearchField";
import { useWeeklyForecast } from "./hooks/use-weekly-forecast";

const INITILA_CITY = "Hamburg";

function App() {
  const toastId = React.useRef("");
  const [searchTerm, setSearchTerm] = useState(INITILA_CITY);
  const [isFocusedSearchInput, setIsFocusedSearchInput] = useState(false);
  const [{ data, isFetching, error }, setCity] = useWeeklyForecast(
    INITILA_CITY
  );

  useEffect(() => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast(error, { type: "error" }).toString();
    }
  }, [error]);

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
    <AppBackground temperature={data?.today.temperature ?? 16}>
      <AppHeader />
      <CitySearchField
        value={searchTerm}
        onSearch={handleSearch}
        onChange={handleSearchInputOnChange}
        onBlur={handleSearchFieldFocusToggle}
        onFocus={handleSearchFieldFocusToggle}
      />
      <ForecastBoard
        today={data?.today}
        nextDays={data?.nextDays}
        isLoading={Boolean(error) || isFetching || isFocusedSearchInput}
      />
    </AppBackground>
  );
}

export default App;
