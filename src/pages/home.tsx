import React, { useEffect, useState } from "react";

import { Container } from "../globalStyle";
import InputBox from "../components/searchBox/inputBox";
import Header from "../components/header/header";
import WeatherForecast from "../components/weatherForecast/weatherForecast";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getIcon = (icon: String) => {
  switch (icon) {
    case "Rain":
      return "rain";
    case "Sunny":
      return "sunny";
    default:
      return "sunny";
  }
};
const Home = () => {
  const [weatherData, setweatherData] = useState([]);
  const [inputChanged, setInputChanged] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(0);
  const [searchText, setSearchText] = useState("Munich");

  const getweatherData = (cityName: string) => {
    var url =
      "http://api.openweathermap.org/data/2.5/forecast/?q=" +
      cityName +
      "&units=metric&appid=e28e6b5eba142c5634d85c10401bb746";
    var weatherData: any = [];
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          result?.list?.map((data: any, index: any) => {
            if (index % 8 === 0) {
              if (index === 0) {
                setCurrentTemp(Math.round(data.main.temp));
              }
              var day = new Date(data.dt * 1000);
              weatherData.push({
                temp: Math.round(data.main.temp),
                id: index,
                day: days[day.getDay()],
                icon: getIcon(data.weather[0].main),
              });
            }
          });
          setweatherData(weatherData);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    getweatherData(searchText);
  }, []);

  const onBlur = (data: any) => {
    getweatherData(data.target.value);
    setInputChanged(false);
  };

  const onChange = (data: any) => {
    setInputChanged(true);
    setSearchText(data.target.value);
  };
  return (
    <Container temp={currentTemp}>
      <Header />
      <InputBox onBlur={onBlur} onChange={onChange} searchText={searchText} />
      <WeatherForecast
        weatherData={weatherData}
        blur={inputChanged}
        currentTemp={currentTemp}
      />
    </Container>
  );
};

export default Home;
