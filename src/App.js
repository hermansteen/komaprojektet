import React, { useEffect, useState } from 'react'
import { fetchFromApi, fetchFromApiLocationiq } from './lib/api'
import HourList from './HourList.js'
import Menu from './Menu.js'
import SplashScreen from './SplashScreen.js'
import './resources/css/app.css'

function App () {
  const [data, setData] = useState()
  const [city, setCity] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi()
      const city = await fetchFromApiLocationiq()
      // console.log(data)
      // console.log(city)
      setData(data.timeSeries)
      setCity(city)
    }
    fetchData()
  }, [])
  const date = new Date()
  let dataToday
  if (data) {
    dataToday = data.filter(timeSerie => timeSerie.validTime.indexOf(date.toISOString().substr(0, 10)) > -1)
    console.log(dataToday)
  }
  return (
    <div>
      {data && city
        ? <div>
          <Menu city={city.address.town} />
          <SplashScreen data={dataToday} />
          <HourList data={dataToday} />
        </div>
        : null}
    </div>
  )
}

export default App
