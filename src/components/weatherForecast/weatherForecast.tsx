import React from "react";
import Icon from "../icon";
import {
  WeatherDetails,
  DayDetails,
  TempDetails,
  Temp,
  Day,
  WeatherIcon,
} from "./weatherForecast.element";
import CurrentTemprature from "../currentTemprature/currentTemprature";
interface props {
  weatherData: any[];
  blur: boolean;
  currentTemp: number;
}

const WeatherForecast = ({ weatherData, blur, currentTemp }: props) => {
  console.log(weatherData);
  return (
    weatherData && (
      <>
        <div style={{ flexDirection: "row", justifyContent: "center" }}>
          <WeatherDetails blur={blur}>
            <CurrentTemprature temp={currentTemp.toString()} />
            {weatherData.map(({ day, temp, icon }) => (
              <DayDetails>
                <Day>{day}</Day>
                <TempDetails>
                  <Temp>
                    {temp}
                    <div style={{ marginTop: -18, marginLeft: -20 }}>
                      <Icon icon="degree" size={50} color="black" />
                    </div>
                  </Temp>

                  <WeatherIcon>
                    <Icon icon={icon} size={40} color="black" />
                  </WeatherIcon>
                </TempDetails>
              </DayDetails>
            ))}
          </WeatherDetails>
        </div>
      </>
    )
  );
};

export default WeatherForecast;
