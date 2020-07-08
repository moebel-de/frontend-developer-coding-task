import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import { Background } from './components/Background/Background'
import { Input } from './components/Input/Input'
import { ContentContainer } from './components/ContentContainer/ContentContainer'
import { WeatherToday } from './components/WeatherToday/WeatherToday'
import { WeatherList } from './components/WeatherList/WeatherList'
import { ErrorNotification } from './components/ErrorNotification/ErrorNotification'
import { fetchWeather, fetchCoordsByCity, pickWeatherProps, mapWeatherToIcon } from './services/api'
import { SSL_OP_ALL } from 'constants'

type Day = {
  date: number,
  weatherType: string,
  temperature: number
}

function App() {
  const [inputFocus, setInputFocus] = useState(false)

  const [error, setError] = useState(false)
  const toggleError = function () {
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 3000)
  }
  let initialDailyWeather: Day[] = []
  const [searching, setSearching] = useState(false)
  const [weather, setWeather] = useState({
    dailyWeather: initialDailyWeather,
    currentTemperature: '--',
    currentWeather: ''
  })
  const [city, setCity] = useState({ lat: 53.5789568, long: 10.118758399999999 })
  const InputHandler = async (city: string) => {
    try {
      if (city !== '') {
        const { lat, lon, errorCode } = await fetchCoordsByCity(city)
        if (lat && lon) {
          setSearching(true)
          setCity({
            lat,
            long: lon
          })
        }
        else {
          toggleError()
        }
      }
    } catch (err) {
      toggleError()
    }
  }
  const FocusHandler = (eventType: string, event: React.FocusEvent) => {
    eventType === 'focus' ? setInputFocus(true) : setInputFocus(false)
  }
  const setCoordinates = (lat: number, long: number) => {
    setCity({ lat, long })
  }

  useEffect(() => {
    async function FetchState() {
      try {
        const { lat, long } = city
        const OneCallResult = await fetchWeather(lat, long)
        const { temperature, type } = pickWeatherProps(OneCallResult.current)


        const futureWeather = OneCallResult.daily.map((day): Day => {
          return {
            date: new Date(day.dt * 1000).getDay(),
            weatherType: mapWeatherToIcon(day.weather[0].main),
            temperature: Math.round(day.temp.day)
          }
        })
        setWeather(Object.assign({}, weather, {
          currentTemperature: Math.round(temperature).toString(),
          dailyWeather: futureWeather.slice(1, futureWeather.length),
          currentWeather: type
        }))

      } catch (error) {
        toggleError()
      }
    }
    FetchState()
  }, [city])
  useEffect(() => {
    setSearching(false)
    setInputFocus(false)
  }, [weather])
  return (

    <Background temperature={17}>
      <ErrorNotification error={error} code={404}></ErrorNotification>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input inputHandler={InputHandler} focusHandler={FocusHandler} setCoordinates={setCoordinates} isSearching={searching} setSearching={setSearching}></Input>
      <ContentContainer focus={inputFocus}>
        <WeatherToday temperature={weather.currentTemperature ? weather.currentTemperature : '--'} weatherType={weather.currentWeather !== '' ? weather.currentWeather : undefined} />
        <WeatherList days={weather.dailyWeather} />
      </ContentContainer>
    </Background>
  )
}

export default App
