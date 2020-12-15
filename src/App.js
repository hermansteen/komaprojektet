import React, { useEffect, useState } from 'react'
import { fetchFromApi, fetchFromApiLocationiq, fetchFromApiFixed, fetchFromApiLocationiqFixed } from './lib/api'
import HourList from './HourList.js'
import Menu from './Menu.js'
import SplashScreen from './SplashScreen.js'
import RainGraph from './RainGraph.js'
import './resources/css/app.css'

function App () {
  const [data, setData] = useState()
  const [city, setCity] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi()
      // const data = await fetchFromApiFixed()
      const city = await fetchFromApiLocationiq()
      // const city = await fetchFromApiLocationiqFixed()
      // console.log(data)
      console.log(city)
      setData(data.timeSeries)
      if (city.address.city) {
        city.address.town = city.address.city
      }
      setCity(city)
    }
    fetchData()
  }, [])

  let dataToday
  const tzoffset = (new Date()).getTimezoneOffset() * 60000 // offset in milliseconds
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0)
  if (data) {
    dataToday = data.filter(timeSerie => timeSerie.validTime.indexOf(localISOTime.substr(0, 10)) > -1)
  }
  return (
    <div className='App'>
      {data && city
        ? <div>
          <Menu city={city.address.town} />
          <SplashScreen data={dataToday} />
          <HourList data={dataToday} />
          <h2 className='interTitle'>Nederbörd (%)</h2>
          <RainGraph data={dataToday} />
          </div>
        : null}
    </div>
  )
}

export default App
