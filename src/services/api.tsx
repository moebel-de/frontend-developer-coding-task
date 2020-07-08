import { OpenWeatherResponse, Current, Coords } from './typings'
import { map } from './mapping'

const API_URL = process.env.REACT_APP_API_URL

const fetchAPI = async (url: string): Promise<OpenWeatherResponse> => {
  const response = await fetch(url, { headers: { 'Access-Control-Allow-Origin': '*', cache: 'no-cache' } })
  const weather = await response.json()
  return weather
}
export async function fetchCoordsByCity(city: string): Promise<Coords> {
  const CITY = `${API_URL}/weather/${city}`
  const coords = await fetchAPI(CITY)
  return coords
}
export async function fetchWeather(lat?: number, long?: number): Promise<OpenWeatherResponse> {
  const ONE_CALL = `${API_URL}/weather?lat=${lat}&long=${long}`
  const weather = await fetchAPI(ONE_CALL)
  return weather
}


export const mapWeatherToIcon = (type: string): string => {
  const icon = map[type]
  if (icon !== undefined) return icon
  return ''
}

export const pickWeatherProps = (currentWeather: Current) => {
  const { temp } = currentWeather
  const { main } = currentWeather.weather[0]

  return {
    type: mapWeatherToIcon(main),
    temperature: temp
  }
}