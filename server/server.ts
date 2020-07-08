import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
import path from 'path'
import compression from 'compression'
import cors from 'cors'

const app = express()
const port = 3001

dotenv.config({ path: path.join(process.cwd(), '.env') })
const API_URL = process.env.OPENWEATHER_URL
const API_TOKEN = process.env.OPENWEATHER_TOKEN

type WeatherObejct = {
  lat: number,
  lon: number,
  error?: number,
}

const getWeatherByCoords = async (lat: string, long: string) => {
  const openweather_url = `${API_URL}/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&units=metric&appid=${API_TOKEN}`
  const { data } = await axios.get(openweather_url)
  return data
}
const getCoordsByCity = async (city: string) => {
  const openweather_url = `${API_URL}/weather?q=${city}&units=metric&appid=${API_TOKEN}`
  const { coord } = (await axios.get(openweather_url)).data
  return coord
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/')
  next()
})

app.use(compression())
app.use(cors())
app.use(express.static('build', {
  maxAge: '86400000'
}))

app.get('/api/weather/:city', async (req, res) => {
  try {
    const coords = await getCoordsByCity(<string>req.params.city)
    res.send(coords)
  } catch (err) {
    let statusCode = err && err.response && err.response.status ? err.response.status : 404
    res.statusCode = statusCode
    res.send({ errorCode: statusCode })
  }
})
app.get('/api/weather', async (req, res) => {
  try {
    const weather = await getWeatherByCoords(<string>req.query.lat, <string>req.query.long)
    res.send(weather)
  } catch (err) {
    res.statusCode = err.response.status
    res.send('Error')
  }
})

app.listen(port, () => console.log(`http://localhost:${port}`))