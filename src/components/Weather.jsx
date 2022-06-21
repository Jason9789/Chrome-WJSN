import axios from 'axios'
import React, { useEffect, useState } from 'react'
import weatherDescKo from '../lib/weatherDescKo'
import cityDescKo from '../lib/cityDescKo'

const Weather = () => {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState('')
  const [weather, setWeather] = useState('')

  const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`

  // 위도, 경도 찾기
  useEffect(() => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
          console.log(lat, lon)
        },
        function (error) {
          console.error(error)
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      )
    } else {
      alert('GPS를 지원하지 않습니다')
      return
    }
  }, [])

  axios
    .get(url)
    .then((response) => {
      const data = response.data
      setCity(data.name)
      setTemp(`${data.main.temp}℃`)
      setWeather(`${weatherDescKo[data.weather[0].id]}`)
      setCity(`${cityDescKo[data.id]}`)
    })
    .catch((e) => {
      console.log(e)
    })

  return (
    <div>
      <div>날씨지롱</div>
      <div>
        {city} {temp}
      </div>
      <div>{weather}</div>
    </div>
  )
}

export default Weather
